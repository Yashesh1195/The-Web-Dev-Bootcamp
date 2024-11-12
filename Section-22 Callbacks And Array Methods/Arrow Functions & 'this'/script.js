const person = {
    firstName: "Virgo",
    lastName: "Mortensen",
    fullName: () => {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    },
    // fullName: function(){
    //     return `${this.firstName} ${this.lastName}`;
    // },
    shoutName: function() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000);
    }
}