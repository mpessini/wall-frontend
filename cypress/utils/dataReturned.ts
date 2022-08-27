export const dataReturned = (status: number, file: string) => {
  return {
    statusCode: status,
    fixture: `${file}.json`
  }
}
