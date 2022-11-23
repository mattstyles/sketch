enum ResourceStatus {
  none,
  pending,
  done,
  error,
}
export class Resource<T> {
  data?: T
  status = ResourceStatus.none
  error = undefined
  promise?: Promise<void | T>
  fn: () => Promise<void | T>

  constructor(fn: () => Promise<T>) {
    this.fn = fn
  }

  private async run() {
    return new Promise<T>(async (res, rej) => {
      try {
        const out = await this.fn()
        res(out as T)
      } catch (err) {
        rej(err)
      }
    })
      .then((data: T) => {
        this.status = ResourceStatus.done
        this.data = data
      })
      .catch((err) => {
        this.status = ResourceStatus.error
        this.error = err
      })
  }

  read() {
    switch (this.status) {
      case ResourceStatus.none:
        const promise = this.run()
        this.promise = promise
        throw this.promise
      case ResourceStatus.pending:
        throw this.promise
      case ResourceStatus.error:
        throw this.error
      case ResourceStatus.done:
        return this.data
    }
  }
}
