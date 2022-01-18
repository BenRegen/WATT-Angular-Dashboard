// user type taken from the mock data base//

export class User {
    constructor(
        // following and feed will become more clear when we get more data//
        public feed: any[],
        public following: any[],
        public general_info: {
            first_name: string,
            last_name: string,
            email: string,
            phone: number,
        },
        public photo_url: string,
        public gender: string,
        public dob: {
            birth_date: Date,
            age: number,
        },
        public device: string,
        public location: {
            city: string,
            state: string,
            country: string,
        },
        public activity: {
            total_trots: number,
            //consider using an event type here//
            events: {
                name: string,
                event_trots: number,
                pledged_trots: number,
            }[]
        }
    ) {}
}
