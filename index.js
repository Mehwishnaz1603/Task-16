"use strict";
///Task # 16 ///
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
let guest_list = ["Nimra", "Ahsan", "Kainat"];
guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list}, would you like to join me for dinner?`);
});
//a guest who can't make it
let guest11 = guest_list[1];
console.log(`\nUnfortunately, ${guest11} can't make it to the dinner.\n`);
//Replace the guest who can't make it with a new guest
let newGuest = "Ayesha";
guest_list[1] = newGuest;
console.log(guest_list);
// Print second set of dinner invitations
for (let guest of guest_list) {
    console.log(`Dear ${guest}, \n\twould you like to join me for dinner?\n\t`);
}
let newGuest1 = "Mohsin";
guest_list.unshift(newGuest1);
let newGuest2 = "Ayan";
guest_list.splice(Math.floor(guest_list.length / 2), 0, newGuest2);
let newGuest3 = "Neha";
guest_list.push(newGuest3);
for (let guest of guest_list) {
    console.log(`Dear ${guest},\n\twould you like to join me for dinner?\n\t`);
}
