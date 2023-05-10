<template>
  <div class="score-case">
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>科目</th>
            <th>成绩</th>
            <th>考试时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="this.list.length">
          <tr v-for="(obj, i) in list" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ obj.subject }}</td>
            <td class="red">{{ obj.score }}</td>
            <td>{{ time(obj.date) }}</td>
            <td><a href="#" @click.prevent="delStu(i)">删除</a><br/>
            <button @click="editStu(i)">编辑</button>
            </td>
          </tr>
          <!-- <tr >
            <td>2</td>
            <td>数学</td>
            <td>100</td>
            <td>Tue Jun 07 2022 10:00:00 GMT+0800 (中国标准时间)</td>
            <td><a href="#">删除</a></td>
          </tr> -->
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5">
              <span class="none">暂无数据</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5">
              <span>总分：{{total_score}}</span>
              <span style="margin-left: 50px">平均分：{{(total_score / this.list.length).toFixed(2)}}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="form">
      <div class="form-item">
        <div class="label">科目：</div>
        <div class="input">
          <input type="text" placeholder="请输入科目" v-model="new_subject" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">分数：</div>
        <div class="input">
          <input type="text" placeholder="请输入分数" v-model.number="new_score" />
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="submit" @click="editStu2">{{submit ? "添加":"编辑"}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// let arr1 = [1,2,3,4]
// console.log(arr1)
// arr1.push(4)
// console.log(arr1)
import moment from "moment"
import { watch } from 'vue';
export default {
  name: "ScoreCase",
  data() {
    return {
      submit: true,
      index: 0,
      // list: [
      //   {
      //     id: 15,
      //     subject: "语文",
      //     score: 89,
      //     date: new Date("2022/06/07 10:00:00"),
      //   },
      //   {
      //     id: 27,
      //     subject: "数学",
      //     score: 100,
      //     date: new Date("2022/06/07 15:00:00"),
      //   },
      //   {
      //     id: 32,
      //     subject: "英语",
      //     score: 56,
      //     date: new Date("2022/06/08 10:00:00"),
      //   },
      //   {
      //     id: 41,
      //     subject: "物理",
      //     score: 76,
      //     date: new Date("2022/06/08 10:00:00"),
      //   },
      // ],
      list: JSON.parse(localStorage.getItem("list")) || [],
      subject: "",
      score: "",
      new_subject: "",
      new_score: null
    };
  },
  methods: {
    delStu(i) {
      this.list.splice(i, 1);
      // localStorage.setItem("list",JSON.stringify(this.list))
    },
    editStu(i){
      this.submit=false
      this.new_subject = this.list[i].subject
      this.new_score = this.list[i].score
      this.index = i
      // localStorage.setItem("list",JSON.stringify(this.list))
    },
    addStu() {
      this.list.push({id: Math.random(), subject: this.new_subject, score: this.new_score, date: new Date()})
      this.new_subject = ""
      this.new_score = null
      // localStorage.setItem("list",JSON.stringify(this.list))
    },
    editStu2(){
      if(this.submit) {
        this.addStu()
      } else {
        this.list.splice(this.index,1,{id: this.list[this.index].id, subject: this.new_subject, score: this.new_score,date: new Date()})
        this.new_subject = ""
        this.new_score = null
        this.submit = true
        // localStorage.setItem("list",JSON.stringify(this.list))
      }
    },
    time(str) {
      return moment(str).format("yyyy-MM-DD HH:mm:ss")
    }
  },
  computed:{
    total_score(){
      return this.list.reduce((a,b) => a + b.score,0)
    }
  },
  watch:{
    // list(a,b){
    //   localStorage.setItem("list", JSON.stringify(this.list))
    // }
    list:{
      deep: true,
      handler(){
        localStorage.setItem("list", JSON.stringify(this.list))
      }
    }
  }
};
</script>

<style lang="less">
.score-case {
  width: 1000px;
  margin: 50px auto;
  display: flex;
  .table {
    flex: 4;
    table {
      width: 100%;
      border-spacing: 0;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      th {
        background: #f5f5f5;
      }
      tr:hover td {
        background: #f5f5f5;
      }
      td,
      th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-align: center;
        padding: 10px;
        &.red {
          color: red;
        }
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
  .form {
    flex: 1;
    padding: 20px;
    .form-item {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
    }
    .form-item .label {
      width: 60px;
      text-align: right;
      font-size: 14px;
    }
    .form-item .input {
      flex: 1;
    }
    .form-item input,
    .form-item select {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
    }
    .form-item input::placeholder {
      color: #666;
    }
    .form-item .cancel,
    .form-item .submit {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 10px;
      margin-right: 10px;
      font-size: 12px;
      background: #ccc;
    }
    .form-item .submit {
      border-color: #069;
      background: #069;
      color: #fff;
    }
  }
}
</style>