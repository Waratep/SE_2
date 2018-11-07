new Vue({
  el: '#vue-app',
  data: {
    checkOpen: false,
    textData: '',
    customer: [{
      building: 'A',
      room: '101',
      hiringStatus: 'เช่าแล้ว',
      customerFirst: {
        firstname: 'สมศรี',
        lastname: 'มีหวัง',
        tel: '0235647420',
        id: '134567890123'
      },
      customerSecond: {
        firstname: 'สมหวัง',
        lastname: 'มีหวัง',
        tel: '0123456789',
        id: '9874563210123'
      },
      request: {
        annoy: {
          building: '',
          room: '101',
          message: 'นาฬิกาปลุก',
        },
        repair: {
          electricity: false,
          water: false,
          airConditioner: false,
          door: false,
          other: '',
        },
        clean: {
          room: false,
          toilet: false,
          airConditioner: false,
        },
      },
      paymentStatus: false,
      rent: {
        rates: 5000,
        elecStart: 1328,
        elecEnd: 1420,
        waterStart: 62,
        waterEnd: 71,
        otherBill: 0,
      },
      obj: ['12345678912TH', '12344678912TH', '12345677912TH'],
    }, ],
    selectedCus: {
      building: '',
      room: '',
      hiringStatus: '',
      customerFirst: {
        firstname: {
          default: 'ชื่อ'
        },
        lastname: {
          default: 'นามสกุล'
        },
        tel: {
          default: 'โทร'
        },
        id: {
          default: 'เลขบัตรประจำตัวประชาชน'
        },
      },
      customerSecond: {
        firstname: {
          default: 'ชื่อ'
        },
        lastname: {
          default: 'นามสกุล'
        },
        tel: {
          default: 'โทร'
        },
        id: {
          default: 'เลขบัตรประจำตัวประชาชน'
        },
      },
      request: {
        annoy: {
          building: '',
          room: '',
          message: '',
        },
        repair: {
          electricity: false,
          water: false,
          airConditioner: false,
          door: false,
          other: '',
        },
        clean: {
          room: false,
          toilet: false,
          airConditioner: false,
        },
      },
      paymentStatus: false,
      rent: {
        rates: 0,
        elecStart: 0,
        elecEnd: 0,
        waterStart: 0,
        waterEnd: 0,
        otherBill: 0
      },
      obj: [],
    },
    CusEmpty: {
      building: '',
      room: '',
      hiringStatus: 'ว่าง',
      customerFirst: {
        firstname: '-',
        lastname: '',
        tel: '',
        id: '',
      },
      customerSecond: {
        firstname: '-',
        lastname: '',
        tel: '',
        id: '',
      },
      request: {
        annoy: {
          building: '',
          room: '',
          message: '',
        },
        repair: {
          electricity: false,
          water: false,
          airConditioner: false,
          door: false,
          other: '',
        },
        clean: {
          room: false,
          toilet: false,
          airConditioner: false,
        },
      },
      paymentStatus: false,
      rent: {
        rates: 0,
        elecStart: 0,
        elecEnd: 0,
        waterStart: 0,
        waterEnd: 0,
        otherBill: 0
      },
      obj: [],
    },
    selectedIndex: -1
  },
  methods: {
    fullName: function(cusName) {
      return cusName.firstname + ' ' + cusName.lastname
    },
    CalculateRent: function(rent) {
      return Number(rent.rates) + (Number(rent.elecEnd - rent.elecStart) * 8) + (Number(rent.waterEnd - rent.waterStart) * 18) + Number(rent.otherBill);
    },
    // check: function() {
    //   console.log(this.hiringStatus);
    // },
    // addObj: function(form) {
    //   this.customer[this.selectedIndex].obj.push(this.textData);
    //   console.log(this.customer[this.selectedIndex].obj);
    //   document.getElementById(form).style.display = "none";
    //   this.selectedIndex = -1;
    //   this.textData = '';
    //   this.$forceUpdate();
    // },
    // receiveObj: function(cus) {
    //   this.selectedIndex = cus;
    //   this.customer[this.selectedIndex].obj = [];
    //   console.log(this.customer[this.selectedIndex].obj);
    //   this.selectedIndex = -1;
    //   this.textData = '';
    //   this.$forceUpdate();
    // },
    fixedSizeTBody: function() {
      const fix_head = document.getElementById("fix_head");
      console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
      fix_head.style.height = (window.innerHeight - fix_head.getBoundingClientRect().top) + "px";
    },
    openform: function(form, cus) {
      if(this.checkOpen==false){
      document.getElementById(form).style.display = "block";
      this.selectedIndex = cus;
      this.selectedCus = JSON.parse(JSON.stringify(this.customer[cus]));
      this.checkOpen = true;}
      console.log(this.checkOpen);
    },
    // saveForm: function(form) {
    //   document.getElementById(form).style.display = "none";
    //   this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
    //   this.selectedIndex = -1;
    //   this.$forceUpdate();
    // },
    closeForm: function(form) {
      document.getElementById(form).style.display = "none";
      this.checkOpen = false;
      console.log(this.checkOpen);
    },
    sentHiringStatusToJson: function(cus) {
      this.selectedIndex = cus;
      this.$forceUpdate();
      if (this.customer[this.selectedIndex].hiringStatus=='ว่าง'){
        this.CusEmpty.building=this.customer[this.selectedIndex].building
        this.CusEmpty.room=this.customer[this.selectedIndex].room
        this.customer[this.selectedIndex]=this.CusEmpty
      }
      var myObj = {
        customer: this.customer[this.selectedIndex],
        room: this.customer[this.selectedIndex].room,
        hiringStatus: this.customer[this.selectedIndex].hiringStatus
      };
      console.log(myObj);
      //axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
    },
    sentInformationFirstToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      var myObj = {
        //building: this.customer[this.selectedIndex].building,
        roomid: this.customer[this.selectedIndex].room,
        name: this.customer[this.selectedIndex].customerFirst.firstname,
        sername: this.customer[this.selectedIndex].customerFirst.lastname,
        Tel: this.customer[this.selectedIndex].customerFirst.tel,
        passportnumber: this.customer[this.selectedIndex].customerFirst.id
      };
      console.log(myObj);
      axios.post('/api/user/edit', myObj).then(res => {
         console.log(res.data)
      });
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentInformationSecondToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        firstname: this.customer[this.selectedIndex].customerSecond.firstname,
        lastname: this.customer[this.selectedIndex].customerSecond.lastname,
        tel: this.customer[this.selectedIndex].customerSecond.tel,
        id: this.customer[this.selectedIndex].customerSecond.id
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentRentToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(JSON.stringify(this.selectedCus));
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        rent: this.CalculateRent(this.customer[this.selectedIndex].rent),
        rates: Number(this.customer[this.selectedIndex].rent.rates),
        elecStart: Number(this.customer[this.selectedIndex].rent.elecStart),
        elecEnd: Number(this.customer[this.selectedIndex].rent.elecEnd),
        waterStart: Number(this.customer[this.selectedIndex].rent.waterStart),
        waterEnd: Number(this.customer[this.selectedIndex].rent.waterEnd),
        otherBill: Number(this.customer[this.selectedIndex].rent.otherBill),
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.checkOpen = false;
    },
    sentHaveObjToJson: function(form) {
      this.customer[this.selectedIndex].obj.push(this.textData);
      console.log(this.customer[this.selectedIndex].obj);
      document.getElementById(form).style.display = "none";
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        obj: this.customer[this.selectedIndex].obj,
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.textData='';
      this.checkOpen = false;
    },
    sentReceiveToJson: function(cus) {
    if (this.checkOpen==false){
      this.selectedIndex = cus;
      if(this.customer[this.selectedIndex].obj.length==0){
        alert("ไม่มีพัสดุ");
      }
      else{
        alert("รับพัสดุเรียบร้อย");
      }
      this.customer[this.selectedIndex].obj = [];
      console.log(this.customer[this.selectedIndex].obj);
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        obj: this.customer[this.selectedIndex].obj ,
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
    }
      console.log(this.checkOpen);
    },
    sentConnectToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        room: this.customer[this.selectedIndex].room,
        message: this.textData,
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.textData='';
      this.checkOpen = false;
    },
  },
  mounted() {
    axios.get('/yay').then(res => {
      console.log(res.data)
      this.customer=res.data
    })
    this.fixedSizeTBody()
    window.addEventListener("resize", () => {
      this.fixedSizeTBody()
    })
  }
});
