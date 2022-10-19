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
}

export class ExtendedDate extends Date {
  getMonthString (): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months.at(this.getMonth()) ?? 'UNDEF'
  }

  format (): string {
    return `${this.getMonthString()} ${this.getFullYear()}`
  }

  formatEndString (): string {
    return this.toDateString() === new Date().toDateString() ? 'Present' : this.format()
  }
}
