import { Injectable } from '@angular/core';
import { User } from '../models/users.model';
import { Event } from '../models/events.model';

@Injectable({
    providedIn: 'root',
}) 
export class UserService {
    private users: User[] = []; //will be able to populate later//
    private myEvent: string = null; //Pull this from the event name later//
//getUser - returns specific user// 
    getUser(id: number){
        return this.users.slice()[id]; 
    }
//getAllUsers - returns list of all users//
    getAllUser() {
        return this.users.slice();
    }
//getNumUsers - returns number of users, may not need that//
    getNumUsers() {
        return this.users.length;
    }
//getAges - thinks of some logic here later, return list of all ages etc, have no idea how to do this, tbh//
    getAges() {
        return null;
    }
//getGenders - returns an array of a comparison of genders//
    getGenders() {
        let males = 0;
        let females = 0;
        let others = 0;
        //iterates through all users and gets their genders//
        this.users.forEach((u) => {
            if (u.gender === 'male') {
                males = males + 1;
            }
            else if (u.gender === 'female') {
                females = females + 1;
            }
            else if (u.gender === 'other') {
                others = others + 1;
            }
        })
        return {males, females, others};
    }
//getTotalTrots - returns a total number of trots by all users//
    getTotalTrots() {
        let trots = 0;
        let index: number;
        let eventNames = null;
        this.users.forEach((u)=>{
            u.activity.events.forEach((e) => {
                index = e.name.indexOf(this.myEvent);
                if (index !== -1) {
                    trots = trots + u.activity.events[index].event_trots;
                }
            })
        }) 
        return trots;
    }
//getPledgedTrots - returns a total number of pledged trots//
    getPledgedTrots() {
    let trots = 0;
    let index: number;
    let eventNames = null;
    this.users.forEach((u)=>{
        u.activity.events.forEach((e) => {
            index = e.name.indexOf(this.myEvent);
            if (index !== -1) {
                trots = trots + u.activity.events[index].pledged_trots;
            }
        })
    }) 
    return trots;
}
//getLocations - returns an array of locations???//
    getLocations () {
        let loc = [];
        this.users.forEach((u) => {
            loc.push({"city":u.location.city, "country":u.location.country});
        });
        return loc;
    }
    //Returns and sorts the occurrences of locations. Does not work yet, do not use
    getLocationsFrequencies() {
        //List of dummy locations for testing
        let loc = [
            {"city": "London", "country":"GB"},
            {"city": "NY", "country":"USA"},
            {"city": "London", "country":"GB"},
            {"city": "LA", "country":"USA"},
            {"city": "London", "country":"GB"},
            {"city": "LA", "country":"USA"},
            {"city": "Tokyo", "country":"Japan"},
            {"city": "London", "country":"GB"},
            {"city": "Tokyo", "country":"Japan"},
            {"city": "NY", "country":"USA"}
        ];
        let frequencies = [];
        let frequency: number;
        // this.users.forEach((u) => {
        //     loc.push({"city":u.location.city, "country":u.location.country});
        // });
        for (const n in loc) {
            let p = loc[n];
            console.log("p: ", p);
            frequency = loc.reduce((a, v) => (JSON.stringify(v) === JSON.stringify(p) ? a + 1 : a), 0);
            frequencies.push({"location":p, "frequency":frequency});
        }
        frequencies.sort((a, b) => b.frequency - a.frequency);
        console.log(frequencies);
        return frequencies;
    }
}