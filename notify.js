var notify = new Vue({
    el: "#notify",
    data: {
        cleaning: [],
        repair: [],
        other: '',
        building: '',
        room: '',
        topic: ''
    },
    methods: {
        pushRepair: function () {
            this.repair.push(this.other);
            this.other = '';
        },
        openformCleaning: function () {
            if (this.cleaning.length == 0) {
                var modal = document.getElementById("uncompleteModal");
                modal.style.display = "block";

                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none"; 
             
                    }
                }
            }
            else {
                var modal = document.getElementById("cleaningModal");
                modal.style.display = "block";
                console.log("open");

                var myObj = {
                    cleaning: this.cleaning,
                };
                console.log(myObj);
                //   axios.post('/yay', myObj).then(res => {
                //     console.log(res.data)
                //   });

                window.onclick = function (event) {
                    if (event.target == modal) {
                        check = true;
                        console.log(check);
                        modal.style.display = "none"; 
             
                    }
                }
                // console.log("hellllllllll");
                
                // if (check == true) {
                //     this.cleaning = [];
                //     this.$forceUpdate();
                //     console.log(this.cleaning);
                // }
            }

        },
        openformRepair: function () {
            if (this.repair.length == 0 || this.other == '') {
                var modal = document.getElementById("uncompleteModal");
                modal.style.display = "block";

                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none"; 
             
                    }
                }
            }else {
                var modal = document.getElementById("repairModal");
                modal.style.display = "block";
                console.log("open");

                var myObj = {
                    repair: this.repair,
                    other: this.other,
                };
                console.log(myObj);
                //   axios.post('/yay', myObj).then(res => {
                //     console.log(res.data)
                //   });

                window.onclick = function (event) {
                    if (event.target == modal) {
                        console.log("close");
                        modal.style.display = "none";
                    }
                };
            }

        },
        openformAnnoy: function () {
            if (this.building == '' && this.room == '' && this.topic == 0) {
                var modal = document.getElementById("uncompleteModal");
                modal.style.display = "block";

                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none"; 
             
                    }
                }
            } else {
                var modal = document.getElementById("annoyModal");
                modal.style.display = "block";
                console.log("open");

                var myObj = {
                    alertBuilding: this.building,
                    alertRoom: this.room,
                    topic: this.topic
                };
                console.log(myObj);
                //   axios.post('/yay', myObj).then(res => {
                //     console.log(res.data)
                //   });

                window.onclick = function (event) {
                    if (event.target == modal) {
                        console.log("close");
                        modal.style.display = "none";
                    }
                };
            }
        }
    },
});


