<template>
  <div class="page" v-if="show">  
    <div class="box">  
      <div class="box_head" v-if="!propshow">
        <div class="font28" @click="calanderShowData">取消</div>
        <div class="font28" @click="calanderSubmit">确定</div>        
      </div>

      <div class="box-flex">  
        <div class="flex-item item-content-current-day  item-content-tit">  
          <div class="item-content titleHead">{{currentDate}}</div>  
        </div>  
        </div>  
      </div>  
      <div class="box-flex">  
        <div class="flex-item">  
          <div class="item-content">一</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">二</div>  
        </div>  
        <div class="flex-item">    
          <div class="item-content">三</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">四</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">五</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">六</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">日</div>  
        </div>  
      </div>  
      <div class="box-flex">  
        <div class="flex-item flexData" v-for='(item, index) in currentDayList' :key='item' @click='itemFun(item.num,mouth[index],index, "first", item.state)' :class="{'hover-date': Section[index] && item.num, 'noBack': !item.state && item.num && !propshow }">  
            <div class="item-content red-background" v-if='currentDay === item.num && mouth[index].mouth === currentMouth.mouth && currentMouth.year === mouth[index].year' :class="{'hoverColorData' : Section[index] && item.num, 'hover-date':active[index]}">
              <p>今天</p>
              <p v-if="item.number && propshow">{{item.number}}展位</p>              
            </div>  
            <div class="item-content backgroundData" v-else :class="{'hover-date':active[index]}" >
              <p>{{item.num}}</p>
              <p v-if="item.number && propshow">{{item.number}}展位</p>
            </div>  
        </div>  
      </div>  
          <div class="box">  
      <div class="box-flex">  
        <div class="flex-item item-content-current-day  item-content-tit">  
          <div class="item-content titleHead">{{currentDateTwo}}</div>  
        </div>  

        </div>  
      </div>  
      <div class="box-flex">  
        <div class="flex-item">  
          <div class="item-content">一</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">二</div>  
        </div>  
        <div class="flex-item">    
          <div class="item-content">三</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">四</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">五</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">六</div>  
        </div>  
        <div class="flex-item">  
          <div class="item-content">日</div>  
        </div>  
      </div>  
      <div class="box-flex">  
        <div class="flex-item flexData" v-for='(item, index) in currentDayListData' :key='item' @click='itemFun(item.num,mouths[index],index, "last", item.state)' :class="{'hover-date': Sections[index] && item.num, 'noBack': !item.state && item.num && !propshow}">  
            <div class="item-content backgroundData" :class="{'hover-date':actives[index]}">
              <p>{{item.num}}{{item.number}}</p>
              <p v-if="item.number && propshow">{{item.number}}展位</p>
            </div>  
        </div>  
      </div> 

  <div v-if="propshow" class="propshowData"></div>
</div>  
</template>  

<script>
import vue from 'vue'
export default {
  name: 'calander',
  data () {
    return {
      calanderList: [],
      show: false,
      currentDate: '2017年05月03日',
      currentDateTwo: '2017年06月03日',
      dayList: '',
      currentDayList: [],
      currentObj: '',
      currentDay: '',
      mouth: [],
      currentMouth: null,
      hoverDate: {'date': null, 'mouth': null, 'year': null},
      activeClick: 0,
      active: [],
      actives: [],
      Section: [],
      firstIndex: 0,
      lastIndex: 0,
      currentDayListData: [],
      currentJudge: false,
      currentObjNew: '',
      Sections: [],
      lastType: '',
      fristType: '',
      numArray: [],
      numArrayTwo: []
    }
  },
  props: {
    propshow: false,
    boothArray: [],
    calanderList: [],
    yearAndmouthFirst: {},
    yearAndmouthTwo: {},
    calanderShow: false
  },
  mounted () {
    this.definedMon()
  },
  methods: {
    definedMon(){
      let timeData = this.getNextMonth(new Date(),1)
      var currentObj = this.getCurrentDayString()
      this.currentDate = currentObj.getFullYear() + '年' + (currentObj.getMonth() + 1) + '月' + currentObj.getDate() + '日'
      this.currentDateTwo = timeData.getFullYear() + '年' + (timeData.getMonth() + 1) + '月' + timeData.getDate() + '日'
      
      this.currentDay = currentObj.getDate()
      
      this.currentObj = currentObj
      this.currentMouth = {
        mouth: currentObj.getMonth() + 1,
        year: currentObj.getFullYear()
      }

      setTimeout(() => {
        console.log(69999999999)
        this.setSchedule(currentObj, 'newMonth') 
        this.setSchedule(this.getNextMonth(new Date(),1), 'nextMonth')            
      },100);
    }, 
    monthDay: function (year, month) {
        month = parseInt(month, 10);
        var d = new Date(year, month, 0);  //这个是都可以兼容的
        var date = new Date(year + "/" + month + "/0")   //IE浏览器可以获取天数，谷歌浏览器会返回NaN
        return d.getDate();
    },
    getNextMonth: function (date,length) {
      let yy = date.getFullYear()
      let mm = date.getMonth()
      let dd = date.getDate()
      
      let nm= 0//目标月份
      nm = mm+length
      let nd = 0//目标天数
      if(this.monthDay(yy,nm+1)<dd){
        nd = this.monthDay(yy,nm+1)
      }else{
        nd = dd-1
      }

      date.setDate(1)
      date.setMonth(nm)
      date.setDate(nd)
      return date
    },
    calanderSubmit(){
      this.$emit('assignment', this.numArray)
    },
    calanderShowData(){
      this.$emit('calanderShowClick', this.calanderShow)
    },
    formatTwo (n) {
      if (n >= 10) return n
      else return '0' + n
    },
    // 判断日历的当前日期是否不可点击
    isDisabled (calander, index, item) {
      // if (new Date(calander).getTime() < new Date().getTime()) {
      //   this.mouth[index].state = 'disabled'
      //   return false
      // }
    },
    getWeekDayNextMonth(){
      var myDate = new Date()
      myDate.setMonth(myDate.getMonth() + 1);
      myDate.setDate(1);
      var weekDay=new Array(7, 1, 2, 3, 4, 5, 6)
      return weekDay[myDate.getDay()];
    },
    itemFun (item, yearAndmouth, index, type, stateClick) {  
      if (stateClick) {
        let dataD = new Date();
        let curMonthDays = new Date(dataD.getFullYear(), (dataD.getMonth()+1), 0).getDate()
        this.hoverDate = {'date': item, 'mouth': yearAndmouth.mouth, 'year': yearAndmouth.year}

        if (type == 'first') {
          var activeArrayData = this.active
          var SectionArrayData = this.Section
        } else {
          var activeArrayData = this.actives
          var SectionArrayData = this.Sections              
        }
        var delceIndex = -1
        this.numArray.forEach((e, i) => {           
          if (yearAndmouth.year == e.year && yearAndmouth.mouth == e.mouth && item == e.date) {
            delceIndex = i      
          }
        })

        if (delceIndex != -1) {
          activeArrayData[index] = false
          vue.set(activeArrayData, index, activeArrayData[index])
          
          this.numArray.splice(delceIndex,1)
          delceIndex = -1
          return          
        }
        this.yearAndmouthFirst = yearAndmouth
        this.yearAndmouthFirst.date = item
        this.activeClick = 1
        this.fristType = type
        this.firstIndex = item
        this.yearFirst = yearAndmouth.year
        this.mouthFirst = yearAndmouth.mouth
        
        activeArrayData[index] = true
        vue.set(activeArrayData, index, activeArrayData[index])
        this.numArray.push(this.yearAndmouthFirst)      
      }
    },
    doDay: function (e) {
      var that = this
      var currentObj = that.currentObj
      var Y = currentObj.getFullYear()
      var m = currentObj.getMonth() + 1
      let newData = new Date 
      let newMonth=newData.getMonth()+1;
      let d = currentObj.getDate()
      var str = ''
      if (e.currentTarget.dataset.key === 'left') {
        m -= 1
        if (m <= 0) {
          str = (Y - 1) + '/' + 12 + '/' + d
        } else {
          str = Y + '/' + m + '/' + d
        }
        this.currentJudge = true
      } else if(e.currentTarget.dataset.key === 'right') {
        if (newMonth !== m) {
          m += 1
          if (m <= 12) {
            str = Y + '/' + m + '/' + d
          } else {
            str = (Y + 1) + '/' + 1 + '/' + d
          }
          this.currentJudge = true
        } else {
          this.currentJudge = false          
        }
      } else if (e.currentTarget.dataset.key === 'leftTwo'){   
        if (newMonth !== m) {
          m -= 1
          if (m <= 0) {
            str = (Y - 1) + '/' + 12 + '/' + d
          } else {
            str = Y + '/' + m + '/' + d
          }
          this.currentJudge = true
        } else {
          this.currentJudge = false
        }
      } else if (e.currentTarget.dataset.key === 'rightTwo'){
        m += 1
        if (m <= 12) {
          str = Y + '/' + m + '/' + d
        } else {
          str = (Y + 1) + '/' + 1 + '/' + d
        }
        this.currentJudge = true
      }
      if (this.currentJudge) {
        currentObj = new Date(str)
        this.currentDate = currentObj.getFullYear() + '年' + (currentObj.getMonth() + 1) + '月' + currentObj.getDate() + '日'
        this.currentDateTwo = currentObj.getFullYear() + '年' + (currentObj.getMonth() + 2) + '月' + currentObj.getDate() + '日'        
        this.currentObjNew = currentObj.getFullYear() + '/' + (currentObj.getMonth() + 2) + '/' + currentObj.getDate() + '/'        
        
        this.currentObj = currentObj
        if (e.currentTarget.dataset.key == 'left' || e.currentTarget.dataset.key == 'right') {
          this.setSchedule(currentObj, 'newMonth')
        } else {
          this.setSchedule(new Date(this.currentObjNew), 'nextMonth')
        }
      }
    },
    getCurrentDayString: function () {
      var objDate = this.currentObj
      if (objDate !== '') {
        return objDate
      } else {
        var cobj = new Date()
        var a = cobj.getFullYear() + '/' + (cobj.getMonth() + 1) + '/' + cobj.getDate()
        return new Date(a)
      }
    },
    setSchedule: function (currentObj, type) {
      var that = this
      var m = currentObj.getMonth() + 1
      var Y = currentObj.getFullYear()
      var d = currentObj.getDate()
      var newDate = new Date()
      var newYear = newDate.getFullYear()
      var newMonth = newDate.getMonth() + 1
      
      // var dayString = Y + '/' + m + '/' + currentObj.getDate()
      var currentDayNum = new Date(Y, m, 0).getDate()
      var currentDayWeek = currentObj.getUTCDay() + 1
      
      var result = currentDayWeek - (d % 7 - 1)
      
      var firstKey = result <= 0 ? 7 + result : result
      
      var currentDayListNew = []

      var mouth = []
      var f = 0
      for (var i = 0; i < 42; i++) {
        mouth[i] = {
          'mouth': m,
          'year': Y
        }
        currentDayListNew[i] = {
          'num': '',
          'number': '',
          'state': false
        }
        if (i < firstKey - 1) {
          currentDayListNew[i].num = ''
        } else {
          if (f < currentDayNum) {
            currentDayListNew[i].num = f + 1
            f = currentDayListNew[i].num
            if (newYear == Y && newMonth == m) {
              if (f >= d) {
                currentDayListNew[i].state = true
              }
            } else {
              if (f <= d) {
                currentDayListNew[i].state = true
              }
            }
          } else if (f >= currentDayNum) {
            currentDayListNew[i].num = ''
          }
          if (this.boothArray.length > 0) {
            this.boothArray.forEach((element, indexArray) => {
              if (element.year == Y && element.mouth == m) {
                if (element.date == currentDayListNew[i].num) {
                  if (String(element.number) == 0) {
                    currentDayListNew[i].state = false
                  }
                  currentDayListNew[i].number = String(element.number)
                }
              }
            })
          }
          if (this.calanderList.length > 0) {
            this.calanderList.forEach((element, indexList) => {
              if (element.year == Y && element.mouth == m) {
                if (element.date == currentDayListNew[i].num) {
                  if (type == 'newMonth') {
                    this.Section[i] = true         
                    this.active[i] = true
                    this.numArray.push(element)
                  } else {
                    this.Sections[i] = true
                    this.actives[i] = true                    
                    this.numArray.push(element)
                  }                  
                }
              }
            });
          }          
        }
      }
      if (type == 'newMonth') {
        that.currentDayList = currentDayListNew
        that.mouth = mouth
      } else {
        that.currentDayListData = currentDayListNew     
        that.mouths = mouth                   
      }      
      this.show = true                
    }
  }
}
</script>

<style scoped>
.box_head{
  height: 1.173333rem /* 88/75 */;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .4rem /* 30/75 */;
  border-bottom: .013333rem /* 1/75 */ solid #E5E5E5;
}
.noBack{
  background: #bbb!important;
  /* border-radius: 5px!important; */
}
.hoverColorData{
  color: #fff!important;
}
.propshowData{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9999;
}
.page{
  background: #fff;
  position: relative;
}
.titleHead{
  margin: .266667rem /* 20/75 */ 0!important;
}
.sectionBack{
  background: #8A2BE2;
}
page {  
  background-color: #2a8cef;  
  background:-webkit-gradient(linear, 0 0, 0 bottom, from(#2a8cef), to(#8A2BE2));  
  display: flex;  
  flex-direction: column;  
  width: 100%;  
  flex-wrap: nowrap;  
  justify-content: flex-start;  
  align-items: stretch;  
  font-size: 16px;  
  color: #222;
} 
.disabled{
  color: #ccc !important;
} 
.hover-date{
  background: #367EED;
  color: #fff !important;
  border-radius: 5px;
}  
.box {  
  display: block;  
  /* margin: 10px;   */
  border-top: .013333rem /* 1/75 */ solid #efefef;  
} 
.glyphicon-triangle-left img{
  transform:rotate(180deg)
} 
  .glyphicon img{
    width:12px;
    height: 19px;
    margin-top:15px;
  }
.box-flex {  
  display: -webkit-box;  
  display: -webkit-flex;  
  display: flex;  
  flex-wrap: wrap;  
  padding: 0 .133333rem /* 10/75 */;
}  
  
.flex-item {  
  flex-flow: nowrap;  
  flex-grow: 1;  
  flex-shrink: 1;  
  width: 14%;  
  margin: 1px 1px 1px 0px;
}  
  
.item-content {  
  margin: 1px;  
  padding: 5px 1px;  
  text-align: center;  
  /* height: 45px;   */
  /* line-height: 45px;   */
  font-size:14px;
  position: relative;
      flex-wrap: wrap;
    justify-content: center;
}  
.item-content i{
  width:100%;
  text-align: center;
  left:0;
  position: absolute;
  top:8px;
}
.item-content span{
  width:100%;
  text-align: center;
  left:0;
  position: absolute;
  top:3px;
  font-size:12px;
  color: #367EED;
  line-height: 1;
}
.item-content-tit{
  width:30%;
  /* margin: .133333rem 10/75 0; */
}
.item-content-tit .item-content{
    font-size:17px;
}
  .red-background{
    color:#367EED;
    border-radius: 5px;
  }
  
  
.item-content-current-day {  
  flex-grow: 2;  
}  
</style>