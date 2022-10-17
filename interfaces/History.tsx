export class HistoryEntry {
  public company: string
  public color: string = 'white'

  public positions: PositionEntry[] = []

  constructor (company: string, color?: string) {
    this.company = company
    if (color != null) this.color = color
  }

  addPosition (title: string, start: Date, end: Date): HistoryEntry {
    this.positions.push(new PositionEntry(title, start, end))
    return this
  }

  get start (): ExtendedDate {
    return this.positions.reduce((a, b) => a.start < b.start ? a : b).start
  }

  get end (): ExtendedDate {
    return this.positions.reduce((a, b) => a.end > b.end ? a : b).end
  }

  get tenureString (): string {
    return tenureString(this.start, this.end)
  }
}

export class PositionEntry {
  public title: string
  public start: ExtendedDate
  public end: ExtendedDate

  constructor (title: string, start: Date, end: Date) {
    this.title = title
    this.start = new ExtendedDate(start)
    this.end = new ExtendedDate(end)
  }

  get tenureString (): string {
    return tenureString(this.start, this.end)
  }
}

export class ExtendedDate extends Date {
  getMonthString (): string {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      .at(this.getMonth()) ?? 'UNDEF'
  }

  format (): string {
    return `${this.getMonthString()} ${this.getFullYear()}`
  }

  formatEndString (): string {
    return this.toDateString() === new Date().toDateString() ? 'Present' : this.format()
  }
}

const tenureString = (start: Date, end: Date): string => {
  let totalMonths
  totalMonths = (end.getFullYear() - start.getFullYear()) * 12
  totalMonths -= start.getMonth()
  totalMonths += end.getMonth()
  totalMonths = totalMonths <= 0 ? 0 : totalMonths

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  let yearsString = `${years} years`
  if (years === 0) yearsString = ''
  if (years === 1) yearsString = '1 year'

  let monthsString = `${months} months`
  if (months === 0) monthsString = ''
  if (months === 1) monthsString = '1 month'

  const and = years > 0 && months > 0 ? ' and ' : ''

  return `${yearsString}${and}${monthsString}`
}
