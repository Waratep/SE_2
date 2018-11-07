new Vue({
  el:'#vue-app',
  data:{
    checkOpen:false,
    customer:[
      {
        building:'A',
        room:'101',
        clean:{
            bedroom:{
              isTrue:false,
              time:'',
              date:''
            },
            toilet:{
              isTrue:true,
              time:'',
              date:''
            },
            airConditioner:{
              isTrue:true,
              time:'',
              date:''
            },
          },
        repair:{
              electricity:{
                isTrue:true,
                time:'',
                date:''
              },
              water:{
                isTrue:true,
                time:'',
                date:''
              },
              airConditioner:{
                isTrue:true,
                time:'',
                date:''
              },
              door:{
                isTrue:true,
                time:'',
                date:''
              },
              other:{
                isOther:'พื้น',
                time:'',
                date:''
              },
            },
      },
    ],
    selectedCus:{
      building:'',
      room:'',
      clean:{
          bedroom:{
            isTrue:false,
            time:'',
            date:''
          },
          toilet:{
            isTrue:false,
            time:'',
            date:''
          },
          airConditioner:{
            isTrue:false,
            time:'',
            date:''
          },
        },
      repair:{
            electricity:{
              isTrue:false,
              time:'',
              date:''
            },
            water:{
              isTrue:false,
              time:'',
              date:''
            },
            airConditioner:{
              isTrue:false,
              time:'',
              date:''
            },
            door:{
              isTrue:false,
              time:'',
              date:''
            },
            other:{
              isOther:'',
              time:'',
              date:''
            },
          },
    },
    selectedIndex:-1,
  },
  methods:{
    openform:function (form,key) {
      if (this.checkOpen==false)  {
        document.getElementById(form).style.display = "block";
        this.selectedIndex = key;
        this.selectedCus = JSON.parse(JSON.stringify(this.customer[key]));
        this.checkOpen = true;
        console.log(this.checkOpen);
      }
    },
    closeForm:function (form) {
      document.getElementById(form).style.display="none";
      this.checkOpen=false;
      console.log(this.checkOpen);
    },
    sentDateAndTimeCleanBedroom:function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      if(this.customer[this.selectedIndex].clean.bedroom.date!==''  && this.customer[this.selectedIndex].clean.bedroom.time!==''){
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: 'clean',
          part: 'bedroom',
          date: this.customer[this.selectedIndex].clean.bedroom.date,
          time: this.customer[this.selectedIndex].clean.bedroom.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeCleanToilet:function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      if (this.customer[this.selectedIndex].clean.toilet.date!='' && this.customer[this.selectedIndex].clean.toilet.time!==''){
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: 'clean',
          part: 'toilet',
          date: this.customer[this.selectedIndex].clean.toilet.date,
          time: this.customer[this.selectedIndex].clean.toilet.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeCleanAirConditioner:function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      if (this.customer[this.selectedIndex].clean.airConditioner.date!=='' && this.customer[this.selectedIndex].clean.airConditioner.time!=='')
      {
        var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        type: 'clean',
        part: 'airConditioner',
        date: this.customer[this.selectedIndex].clean.airConditioner.date,
        time: this.customer[this.selectedIndex].clean.airConditioner.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairElectricity:function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      if(this.customer[this.selectedIndex].repair.electricity.date!=='' && this.customer[this.selectedIndex].repair.electricity.time!==''){
        var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        type: 'repair',
        part: 'electricity',
        date: this.customer[this.selectedIndex].repair.electricity.date,
        time: this.customer[this.selectedIndex].repair.electricity.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
        }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairWater:function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      if(this.customer[this.selectedIndex].repair.water.date!=='' && this.customer[this.selectedIndex].repair.water.time!==''){
        var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        type: 'repair',
        part: 'water',
        date: this.customer[this.selectedIndex].repair.water.date,
        time: this.customer[this.selectedIndex].repair.water.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
        }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairAirConditioner:function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      if(this.customer[this.selectedIndex].repair.airConditioner.date!=='' && this.customer[this.selectedIndex].repair.airConditioner.time!==''){
        var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        type: 'repair',
        part: 'airConditioner',
        date: this.customer[this.selectedIndex].repair.airConditioner.date,
        time: this.customer[this.selectedIndex].repair.airConditioner.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
        }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairDoor:function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      if(this.customer[this.selectedIndex].repair.door.date!=='' && this.customer[this.selectedIndex].repair.door.time!==''){
        var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        type: 'repair',
        part: 'door',
        date: this.customer[this.selectedIndex].repair.door.date,
        time: this.customer[this.selectedIndex].repair.door.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
        }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentDateAndTimeRepairOther:function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      if(this.customer[this.selectedIndex].repair.other.date!=='' && this.customer[this.selectedIndex].repair.other.time!==''){
        var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        type: 'repair',
        part: 'other',
        date: this.customer[this.selectedIndex].repair.other.date,
        time: this.customer[this.selectedIndex].repair.other.time
        };
        console.log(myObj);
        // axios.post('/yay', myObj).then(res => {
        //   console.log(res.data)
        // });
        }
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    fixedSizeTBody: function(id) {
      const fix_head = document.getElementById(id);
      console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
      fix_head.style.height = (window.innerHeight - (fix_head.getBoundingClientRect().top+50)) + "px";
    },
    nextSchedule:function(){
      window.location.href="staff2.html"
    },
    nextSentDrinkingWater:function() {
      window.location.href="staff3.html"
    }
  },
  mounted() {
    axios.get('/api/notify/show').then(res => {
      console.log(res.data)
      this.customer=res.data  
    })
    this.fixedSizeTBody("fix_head1")
    this.fixedSizeTBody("fix_head2")
    window.addEventListener("resize", () => {
      this.fixedSizeTBody("fix_head1")
      this.fixedSizeTBody("fix_head2")
    })
  }
});
