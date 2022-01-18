
//event type taken from the mock date base //
export class Event {
    constructor(
      public event_name: string,
      public is_ongoing: boolean,
      public start_date: Date,
      public end_date: Date,
      public amount_raised: number,
      public location: {
          city: string,
          state: string,
          country: string,
          geographic: {
              latitude: number,
              longitude: number,
          }
      },
      public statistics: {
          total_trots: number,
          pledged_trots: number,
      }
    ) {}
}
