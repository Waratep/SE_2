new Vue({
  el:'#vue-app',
  data:{
    dateSelected:'2018-10-30',
    timeCurrent:'10:25',
    schedule:{
      timelineClean:[
        {
          time:'12:00',
          building:'A',
          room:'101',
          bedroom:true,
          toilet:true,
          airConditioner:false,
        },
        ],
      timelineRepair:[
        {
          time:'13:00',
          building:'A',
          room:'102',
          electricity:false,
          water:true,
          airConditioner:false,
          door:false,
          other:'พื้น'
        },
      ],
    },

  },
  methods:{
      // changeTime:function(){
      //   console.log(this.timeCurrent);
      // },
      changeDate:function(){
        console.log(this.dateSelected);
      },
      sentDate:function() {
          var myObj = {
            date: this.dateSelected,
          };
          console.log(myObj);
          // axios.post('/yay', myObj).then(res => {
          //   console.log(res.data)
          //   this.schedule=res.data
          // });
          this.$forceUpdate();
      },
      fixedSizeTBody: function(id) {
        const fix_head = document.getElementById(id);
        console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
        fix_head.style.height = (window.innerHeight - (fix_head.getBoundingClientRect().top+50)) + "px";
      },
      nextSetDateAndTime:function(){
        window.location.href="staff1.html"
      },
      nextSentDrinkingWater:function() {
        window.location.href="staff3.html"
      }
    },
    mounted() {
      // axios.get('/yay').then(res => {
      //   console.log(res.data)
      //   this.schedule=res.data
      // })
      this.fixedSizeTBody("fix_head1")
      this.fixedSizeTBody("fix_head2")
      window.addEventListener("resize", () => {
        this.fixedSizeTBody("fix_head1")
        this.fixedSizeTBody("fix_head2")
      })
    }
});
