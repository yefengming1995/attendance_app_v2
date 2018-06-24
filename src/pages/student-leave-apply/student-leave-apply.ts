import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertProvider} from "../../providers/alert/alert";
import {Http, URLSearchParams} from "@angular/http";

/**
 * Generated class for the StudentLeaveApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-leave-apply',
  templateUrl: 'student-leave-apply.html',
})
export class StudentLeaveApplyPage {

  current_user: '';
  allCourses = new Array();
  course_towho = '';
  student_name = '';

  leave = {
    course_id: '',
    course_name: '',
    student_id: '',
    student_name: '',
    leave_reason:'',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alert: AlertProvider) {
    this.current_user = this.navParams.get('current_user');
    console.log("leave page: " + this.current_user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentLeaveApplyPage');

    //发送请求（账号），接收回复（所有课程信息）
    let courseRequest = new URLSearchParams();
    courseRequest.append('student_id',this.current_user);

    let courseURL = 'http://119.29.225.79:8080/login/CourseByStudentId';
    this.http.post(courseURL,courseRequest).map(res => res.json()).subscribe(data => {
      console.log('data...');
      console.log(JSON.stringify(data));

      for(var course of data.data) {
        this.allCourses.push([course.course_name, course.course_day, course.class_scope, course.place_id1, course.course_towho, course.student_name, course.course_id]);
      }

      this.course_towho = this.allCourses[0][4];
      this.student_name = this.allCourses[0][5];
      console.log(this.allCourses);
    });
  }

  getInformation() {
    for(var course of this.allCourses) {
      if(course[0] == this.leave.course_name) {
        this.leave.course_id = course[6];
        this.leave.student_name = course[5];
      }
    }
  }

  submit() {
    if(this.leave.course_name == '') {
      this.alert.alertMessages('请选择课程名称！');
    } else {
      if(this.leave.leave_reason == '') {
        this.alert.alertMessages('请选择请假理由！');
      } else {
        this.getInformation();

        //发送请求（账号），接收回复（所有课程信息）
        let leaveRequest = new URLSearchParams();
        leaveRequest.append('student_id',this.current_user);
        leaveRequest.append('student_name',this.leave.student_name);
        leaveRequest.append('course_id',this.leave.course_id);
        leaveRequest.append('course_name',this.leave.course_name);
        leaveRequest.append('leave_reason',this.leave.leave_reason);

        console.log(this.leave);

        let leaveURL = 'http://119.29.225.79:8080/login/StudentAskLeave';
        this.http.post(leaveURL,leaveRequest).map(res=>res.json()).subscribe();

        this.alert.alertMessages('假条已提交成功！');
        this.navCtrl.pop();
      }
    }
  }

}
