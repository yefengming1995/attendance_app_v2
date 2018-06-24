webpackJsonp([18],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.register = {
            school: '',
            college: '',
            major: '',
            year: '',
            stnumber: '',
            phone: '',
            password: '',
            confirmPassword: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        this.registerSlides.lockSwipes(true);
    };
    RegisterPage.prototype.next = function () {
        this.registerSlides.lockSwipes(false);
        this.registerSlides.slideNext();
        this.registerSlides.lockSwipes(true);
    };
    RegisterPage.prototype.previous = function () {
        this.registerSlides.lockSwipes(false);
        this.registerSlides.slidePrev();
        this.registerSlides.lockSwipes(true);
    };
    RegisterPage.prototype.correct = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('registerSlides'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "registerSlides", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid margin-top>\n    <ion-row>\n      <ion-col>\n        <img src="assets/images/register_one_grey.png" alt="" *ngIf="registerSlides.getActiveIndex()!=0">\n        <img src="assets/images/register_one.png" alt="" *ngIf="registerSlides.getActiveIndex()==0">\n      </ion-col>\n\n      <ion-col align-self-center>\n        <hr class="line">\n      </ion-col>\n\n      <ion-col>0\n        <img src="assets/images/register_two_grey.png" alt="" *ngIf="registerSlides.getActiveIndex()!=1">\n        <img src="assets/images/register_two.png" alt="" *ngIf="registerSlides.getActiveIndex()==1">\n      </ion-col>\n\n      <ion-col align-self-center>\n        <hr class="line">\n      </ion-col>\n\n      <ion-col>\n        <img src="assets/images/register_three_grey.png" alt="" *ngIf="registerSlides.getActiveIndex()!=2">\n        <img src="assets/images/register_three.png" alt="" *ngIf="registerSlides.getActiveIndex()==2">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div margin-top padding-top>\n    <ion-slides #registerSlides>\n      <!-- 第一步 输入教育信息 -->\n      <ion-slide>\n        <form #personalInformationForm="ngForm">\n          <ion-item>\n            <ion-label>学校</ion-label>\n            <ion-select name="school" [(ngModel)]="register.school">\n              <ion-option value="fuda">福大</ion-option>\n              <ion-option value="fushida">福师大</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>学院</ion-label>\n            <ion-select name="college" [(ngModel)]="register.college">\n              <ion-option value="shuji">数计</ion-option>\n              <ion-option value="jingguan">经管</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>专业</ion-label>\n            <ion-select name="major" [(ngModel)]="register.major">\n              <ion-option value="jisuanjijishu">计算机技术</ion-option>\n              <ion-option value="ruanjiangongcheng">软件工程</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>入学年份</ion-label>\n            <ion-select name="year" [(ngModel)]="register.year">\n              <ion-option value="2017">2017</ion-option>\n              <ion-option value="2018">2018</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-input name="stnumber" placeholder="请输入您的学号/工号" required [(ngModel)]="register.stnumber" #stnumber="ngModel"></ion-input>\n          </ion-item>\n\n          <button type="submit" ion-button block parmary [disabled]="personalInformationForm.invalid" (click)="next()">下一步</button>\n        </form>\n      </ion-slide>\n\n      <!-- 第二步 输入手机号密码 -->\n      <ion-slide>\n        <form #phoneForm="ngForm">\n          <ion-item>\n            <ion-input name="phone" type="number" placeholder="请输入您的手机号码"\n                       required pattern="^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,3,5-9]))\\d{8}$"\n                       [(ngModel)]="register.phone" #phone="ngModel">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name="password" type="password" placeholder="请输入登录密码" required [(ngModel)]="register.password" #password="ngModel">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name="confirmPassword" type="password" placeholder="请输入确认密码" required [(ngModel)]="register.confirmPassword" #confirmPassword="ngModel">\n            </ion-input>\n          </ion-item>\n          <ion-item *ngIf="phone.invalid && phone.touched">\n            <p [hidden]="!phone.errors?.required">请输入手机号码</p>\n            <p [hidden]="!phone.errors?.pattern">您输入的手机号格式不正确</p>\n          </ion-item>\n          <ion-item *ngIf="password.invalid && password.touched">\n            <p [hidden]="!password.errors?.required">请输入登录密码</p>\n          </ion-item>\n          <ion-item *ngIf="confirmPassword.invalid && confirmPassword.touched">\n            <p [hidden]="!confirmPassword.errors?.required">请输入确认密码</p>\n          </ion-item>\n          <button type="submit" ion-button block parmary [disabled]="phoneForm.invalid" (click)="next()" >下一步</button>\n          <button type="submit" ion-button block parmary (click)="previous()" >上一步</button>\n        </form>\n      </ion-slide>\n\n      <!-- 第三步 确认教育信息 -->\n      <ion-slide>\n        <ion-item>\n          <ion-label>确认教育信息</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>学校：{{register.school}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>学院：{{register.college}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>专业：{{register.major}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>入学年份：{{register.year}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>学号/工号：{{register.stnumber}}</ion-label>\n        </ion-item>\n\n          <button type="submit" ion-button block parmary (click)="correct()" >提交</button>\n          <button type="submit" ion-button block parmary (click)="previous()" >上一步</button>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_manage_teacher_manage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacher_check_in_teacher_check_in__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TeacherHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherHomePage = (function () {
    function TeacherHomePage(navCtrl, navParams, alert, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.http = http;
        this.current_user = '';
        this.allCourses = new Array();
        this.teacher_name = '';
        this.today = '';
        this.current_user = this.navParams.get('current_user');
        console.log(this.current_user);
    }
    TeacherHomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeacherHomePage');
        var day = new Date().getDay();
        switch (day) {
            case 0: this.today = '星期一';
            case 1: this.today = '星期二';
            case 2: this.today = '星期三';
            case 3: this.today = '星期四';
            case 4: this.today = '星期五';
            case 5: this.today = '星期六';
            case 6: this.today = '星期天';
        }
        console.log(this.today);
        //发送请求（账号），接收回复（所有课程信息）
        var courseRequest = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* URLSearchParams */]();
        courseRequest.append('teacher_id', this.current_user);
        var courseURL = 'http://119.29.225.79:8080/login/CourseByTeacherId';
        this.http.post(courseURL, courseRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('data...');
            console.log(JSON.stringify(data));
            for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                var course = _a[_i];
                _this.allCourses.push([course.course_name, course.course_day, course.class_scope, course.place_id1, course.teacher_name, course.course_id]);
            }
            _this.teacher_name = _this.allCourses[0][4];
            console.log(_this.allCourses);
        });
    };
    TeacherHomePage.prototype.toTeacherManagePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacher_manage_teacher_manage__["a" /* TeacherManagePage */], { 'current_user': this.current_user });
    };
    TeacherHomePage.prototype.attendance = function (course_name) {
        var place_id = '', course_id = '', course_day = '';
        for (var _i = 0, _a = this.allCourses; _i < _a.length; _i++) {
            var oneCourse = _a[_i];
            if (oneCourse[0] == course_name) {
                course_day = oneCourse[1];
                place_id = oneCourse[3];
                course_id = oneCourse[5];
                console.log(place_id);
                console.log(course_day);
                console.log(course_id);
            }
        }
        if (course_day != this.today) {
            this.alert.alertMessages('不是今天的课程哦');
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teacher_check_in_teacher_check_in__["a" /* TeacherCheckInPage */], {
                'current_user': this.current_user,
                'place_id': place_id,
                'course_name': course_name,
                'course_id': course_id
            });
        }
    };
    TeacherHomePage.prototype.courseExist = function (day, scope) {
        var cName = '';
        for (var _i = 0, _a = this.allCourses; _i < _a.length; _i++) {
            var oneCourse = _a[_i];
            if (oneCourse[1] == day && oneCourse[2] == scope) {
                cName = oneCourse[0];
            }
        }
        return cName;
    };
    return TeacherHomePage;
}());
TeacherHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacher-home',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-home\teacher-home.html"*/'<!--\n  Generated template for the TeacherHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{teacher_name}}的本周课程</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row style="background: lightsteelblue">\n        <button style="margin-left: 5px" ion-button color="light-blue" (click)="toTeacherManagePage()">管理</button>\n        <ion-label style="text-align: center">{{teacher_name}}的本周课程</ion-label>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <!-- 课程数据 -->\n      <ion-col style="width: 9%">\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 40px">1</ion-row>\n        <ion-row style="height: 40px">2</ion-row>\n        <ion-row style="height: 40px">3</ion-row>\n        <ion-row style="height: 40px">4</ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 40px">5</ion-row>\n        <ion-row style="height: 40px">6</ion-row>\n        <ion-row style="height: 40px">7</ion-row>\n        <ion-row style="height: 40px">8</ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 40px">9</ion-row>\n        <ion-row style="height: 40px">10</ion-row>\n        <ion-row style="height: 40px">11</ion-row>\n        <ion-row style="height: 40px">12</ion-row>\n      </ion-col>\n\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周一</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'1-2节\'))">{{courseExist(\'星期一\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'3-4节\'))">{{courseExist(\'星期一\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'5-6节\'))">{{courseExist(\'星期一\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'7-8节\'))">{{courseExist(\'星期一\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'9-10节\'))">{{courseExist(\'星期一\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'11-12节\'))">{{courseExist(\'星期一\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周二</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'1-2节\'))">{{courseExist(\'星期二\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'3-4节\'))">{{courseExist(\'星期二\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'5-6节\'))">{{courseExist(\'星期二\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'7-8节\'))">{{courseExist(\'星期二\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'9-10节\'))">{{courseExist(\'星期二\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'11-12节\'))">{{courseExist(\'星期二\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周三</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'1-2节\'))">{{courseExist(\'星期三\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'3-4节\'))">{{courseExist(\'星期三\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'5-6节\'))">{{courseExist(\'星期三\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'7-8节\'))">{{courseExist(\'星期三\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'9-10节\'))">{{courseExist(\'星期三\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'11-12节\'))">{{courseExist(\'星期三\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周四</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'1-2节\'))">{{courseExist(\'星期四\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'3-4节\'))">{{courseExist(\'星期四\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'5-6节\'))">{{courseExist(\'星期四\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'7-8节\'))">{{courseExist(\'星期四\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'9-10节\'))">{{courseExist(\'星期四\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'11-12节\'))">{{courseExist(\'星期四\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周五</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'1-2节\'))">{{courseExist(\'星期五\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'3-4节\'))">{{courseExist(\'星期五\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'5-6节\'))">{{courseExist(\'星期五\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'7-8节\'))">{{courseExist(\'星期五\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'9-10节\'))">{{courseExist(\'星期五\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'11-12节\'))">{{courseExist(\'星期五\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周六</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'1-2节\'))">{{courseExist(\'星期六\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'3-4节\'))">{{courseExist(\'星期六\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'5-6节\'))">{{courseExist(\'星期六\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'7-8节\'))">{{courseExist(\'星期六\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'9-10节\'))">{{courseExist(\'星期六\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'11-12节\'))">{{courseExist(\'星期六\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周天</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'1-2节\'))">{{courseExist(\'星期天\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'3-4节\'))">{{courseExist(\'星期天\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'5-6节\'))">{{courseExist(\'星期天\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'7-8节\'))">{{courseExist(\'星期天\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'9-10节\'))">{{courseExist(\'星期天\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'11-12节\'))">{{courseExist(\'星期天\',\'11-12节\')}}</button></ion-row>\n     </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-home\teacher-home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _d || Object])
], TeacherHomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=teacher-home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeacherReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherReportPage = (function () {
    function TeacherReportPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    TeacherReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherReportPage');
    };
    TeacherReportPage.prototype.submit = function () {
        this.alert.alertMessages('功能开发中，敬请期待...');
    };
    return TeacherReportPage;
}());
TeacherReportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacher-report',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-report\teacher-report.html"*/'<!--\n  Generated template for the TeacherReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>上报</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n     <ion-item>\n       <ion-label style="font-size: large">系统出错</ion-label>\n     </ion-item>\n     <label for="group1"><input type="radio" id="group1" class="group"  name="group" value="1" ng-model="choice" >\n       <span style="font-size: medium">课表安排有误</span>\n     </label><br>\n     <label for="group2"><input type="radio" id="group2" class="group" name="group" value="2" ng-model="choice" >\n       <span style="font-size: medium">学生名单有误</span>\n     </label><br>\n    <label for="group3"><input type="radio" id="group3" class="group" name="group" value="3" ng-model="choice" >\n      <span style="font-size: medium">其他</span>\n      <ion-input placeholder="请输入其他错误" style="height: 90px;width: auto;font-size: medium"></ion-input>\n    </label>\n  </ion-list>\n  <div class="row">\n      <button type="submit" ion-button block color="light-blue" round (click)="submit()">提交</button>\n  </div>\n </ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-report\teacher-report.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]])
], TeacherReportPage);

//# sourceMappingURL=teacher-report.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherApplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeacherApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherApplyPage = (function () {
    function TeacherApplyPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    TeacherApplyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherApplyPage');
    };
    TeacherApplyPage.prototype.submit = function () {
        this.alert.alertMessages('功能开发中，敬请期待...');
    };
    return TeacherApplyPage;
}());
TeacherApplyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacher-apply',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-apply\teacher-apply.html"*/'<!--\n  Generated template for the TeacherApplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>申请</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label style="font-size: large">申请</ion-label>\n    </ion-item>\n    <label for="group1"><input type="radio" id="group1" class="group"  name="group" value="1" ng-model="choice" >\n      <span style="font-size: medium">长期调换教室</span>\n    </label><br>\n    <label for="group2"><input type="radio" id="group2" class="group" name="group" value="2" ng-model="choice" >\n      <span style="font-size: medium">临时调课</span>\n    </label><br>\n    <label for="group3"><input type="radio" id="group3" class="group" name="group" value="3" ng-model="choice" >\n      <span style="font-size: medium">其他</span>\n      <ion-input placeholder="请输入其他申请" style="height: 90px;width: auto;font-size: medium"></ion-input>\n    </label>\n  </ion-list>\n  <div class="row">\n    <button type="submit" ion-button block color="light-blue" round (click)="submit()">提交</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-apply\teacher-apply.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]])
], TeacherApplyPage);

//# sourceMappingURL=teacher-apply.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeacherLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherLeavePage = (function () {
    function TeacherLeavePage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    TeacherLeavePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherLeavePage');
    };
    TeacherLeavePage.prototype.submit = function () {
        this.alert.alertMessages('功能开发中，敬请期待...');
    };
    return TeacherLeavePage;
}());
TeacherLeavePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacher-leave',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-leave\teacher-leave.html"*/'<!--\n  Generated template for the TeacherLeavePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>学生请假条管理</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">待审核</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">已同意</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">未通过</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-leave\teacher-leave.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]])
], TeacherLeavePage);

//# sourceMappingURL=teacher-leave.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherRespondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeacherRespondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherRespondPage = (function () {
    function TeacherRespondPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    TeacherRespondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherRespondPage');
    };
    TeacherRespondPage.prototype.submit = function () {
        this.alert.alertMessages('功能开发中，敬请期待...');
    };
    return TeacherRespondPage;
}());
TeacherRespondPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacher-respond',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-respond\teacher-respond.html"*/'<!--\n  Generated template for the TeacherRespondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>管理员反馈</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n    <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">上报结果</button>\n  </ion-item>\n  <ion-item>\n    <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">申请结果</button>\n  </ion-item>\n  <ion-item>\n    <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">快超过警戒线的学生名单</button>\n  </ion-item>\n  <ion-item>\n    <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">已超过警戒线的学生名单</button>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-respond\teacher-respond.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]])
], TeacherRespondPage);

//# sourceMappingURL=teacher-respond.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherCheckInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_manage_teacher_manage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherCheckInPage = (function () {
    function TeacherCheckInPage(navCtrl, navParams, platform, alertMess, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertMess = alertMess;
        this.http = http;
        this.courseInformation = '';
        this.current_user = '';
        this.place_id = '';
        this.attendantStudents = new Array();
        this.course_id = '';
        this.course_name = '';
        this.absentStudents = new Array();
        this.current_user = this.navParams.get('current_user');
        this.place_id = this.navParams.get('place_id');
        this.course_name = this.navParams.get('course_name');
        this.course_id = this.navParams.get('course_id');
    }
    TeacherCheckInPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeacherCheckInPage');
        this.rowNumber = 6;
        //发送请求（place_id）
        var getAttendantStudentRequest = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* URLSearchParams */]();
        getAttendantStudentRequest.append('place_id', this.place_id);
        var getAttendantStudentURL = 'http://119.29.225.79:8080/login/SignInSuccessStudent';
        this.http.post(getAttendantStudentURL, getAttendantStudentRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
            //接收数据（place_id对应的已签到成功的学生名单()）
            console.log('attendant student: ' + data);
            for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                var student = _a[_i];
                _this.attendantStudents.push([student.sign_stuId, student.sign_stuName, student.sign_stuSeat]);
            }
            console.log(_this.attendantStudents);
        });
    };
    TeacherCheckInPage.prototype.getStudentExistence = function (seat) {
        var exist = '0';
        for (var _i = 0, _a = this.attendantStudents; _i < _a.length; _i++) {
            var oneStu = _a[_i];
            if (oneStu[2] == seat) {
                exist = '1';
            }
        }
        return exist;
    };
    TeacherCheckInPage.prototype.showStudentInformation = function (seat) {
        for (var _i = 0, _a = this.attendantStudents; _i < _a.length; _i++) {
            var oneStu = _a[_i];
            if (oneStu[2] == seat) {
                this.alertMess.alertMessages('学号： ' + oneStu[0] + '   姓名： ' + oneStu[1]);
            }
        }
    };
    TeacherCheckInPage.prototype.studentNotExist = function () {
        this.alertMess.alertMessages('该座位没有学生！');
    };
    TeacherCheckInPage.prototype.toTeacherManagePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacher_manage_teacher_manage__["a" /* TeacherManagePage */]);
    };
    TeacherCheckInPage.prototype.attend = function () {
        var _this = this;
        this.alertMess.alertMessages('已上课！');
        var geoLocation = new BMap.Geolocation();
        var place_id = this.place_id;
        var lng, lat;
        geoLocation.getCurrentPosition(function (r) {
            lng = r.point.lng;
            lat = r.point.lat;
            console.log('您的位置：' + lng + ',' + lat);
            //发送请求（place_id + 经度 + 纬度）
            var setLocationRequest = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* URLSearchParams */]();
            setLocationRequest.append('place_id', place_id);
            setLocationRequest.append('place_longitude', lng);
            setLocationRequest.append('place_latitude', lat);
            var setLocationURL = 'http://119.29.225.79:8080/login/TeacherSetPlace';
            _this.http.post(setLocationURL, setLocationRequest).map(function (res) { return res.json(); }).subscribe();
        }, { enableHighAccuracy: true });
    };
    TeacherCheckInPage.prototype.finishClass = function () {
        this.alertMess.alertMessages('已下课！');
        this.navCtrl.pop();
    };
    TeacherCheckInPage.prototype.relatedInformation = function () {
        var _this = this;
        if (this.courseInformation == 'studentList') {
            this.alertMess.alertMessages('功能尚未开发，敬请期待...您可以查看“旷课及请假学生名单”');
        }
        else if (this.courseInformation == 'absentStudentList') {
            var len = this.absentStudents.length;
            if (len != 0) {
                for (var i = 0; i < len; i++) {
                    this.absentStudents.pop();
                }
            }
            var absentStudentRequest = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* URLSearchParams */]();
            absentStudentRequest.append('course_id', this.course_id);
            var absentStudentURL = 'http://119.29.225.79:8080/login/TeacherCheckLeave';
            this.http.post(absentStudentURL, absentStudentRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data.data);
                if (data.data.length == 0) {
                    _this.alertMess.alertMessages('所有学生都已签到！');
                }
                else {
                    for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                        var student = _a[_i];
                        _this.absentStudents.push([student.student_id, student.student_name, student.leave_reason]);
                    }
                    _this.alertMess.alertMessages(_this.absentStudents);
                    _this.courseInformation = '';
                }
            });
        }
        else if (this.courseInformation == 'historyRecord') {
            this.alertMess.alertMessages('功能尚未开发，敬请期待...您可以查看“旷课及请假学生名单”');
        }
    };
    return TeacherCheckInPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], TeacherCheckInPage.prototype, "mapElement", void 0);
TeacherCheckInPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacher-check-in',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-check-in\teacher-check-in.html"*/'<!--\n  Generated template for the TeacherCheckInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{course_name}} 上课/下课</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="row">\n    <div class="col" style="text-align: center">讲台</div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(1) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(1) == \'1\'" (click) = showStudentInformation(1)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(2) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(2) == \'1\'" (click) = showStudentInformation(2)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(3) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(3) == \'1\'" (click) = showStudentInformation(3)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(4) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(4) == \'1\'" (click) = showStudentInformation(4)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(5) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(5) == \'1\'" (click) = showStudentInformation(5)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(6) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(6) == \'1\'" (click) = showStudentInformation(6)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(7) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(7) == \'1\'" (click) = showStudentInformation(7)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(8) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(8) == \'1\'" (click) = showStudentInformation(8)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(9) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(9) == \'1\'" (click) = showStudentInformation(9)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(10) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(10) == \'1\'" (click) = showStudentInformation(10)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(11) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(11) == \'1\'" (click) = showStudentInformation(11)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(12) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(12) == \'1\'" (click) = showStudentInformation(12)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(13) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(13) == \'1\'" (click) = showStudentInformation(13)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(14) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(14) == \'1\'" (click) = showStudentInformation(14)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(15) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(15) == \'1\'" (click) = showStudentInformation(15)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(16) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(16) == \'1\'" (click) = showStudentInformation(16)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(17) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(17) == \'1\'" (click) = showStudentInformation(17)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(18) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(18) == \'1\'" (click) = showStudentInformation(18)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(19) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(19) == \'1\'" (click) = showStudentInformation(19)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(20) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(20) == \'1\'" (click) = showStudentInformation(20)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(21) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(21) == \'1\'" (click) = showStudentInformation(21)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(22) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(22) == \'1\'" (click) = showStudentInformation(22)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(23) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(23) == \'1\'" (click) = showStudentInformation(23)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(24) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(24) == \'1\'" (click) = showStudentInformation(24)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(25) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(25) == \'1\'" (click) = showStudentInformation(25)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(26) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(26) == \'1\'" (click) = showStudentInformation(26)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(27) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(27) == \'1\'" (click) = showStudentInformation(27)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(28) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(28) == \'1\'" (click) = showStudentInformation(28)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(29) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(29) == \'1\'" (click) = showStudentInformation(29)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(30) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(30) == \'1\'" (click) = showStudentInformation(30)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(31) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(31) == \'1\'" (click) = showStudentInformation(31)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(32) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(32) == \'1\'" (click) = showStudentInformation(32)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(33) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(33) == \'1\'" (click) = showStudentInformation(33)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(34) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(34) == \'1\'" (click) = showStudentInformation(34)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(35) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(35) == \'1\'" (click) = showStudentInformation(35)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(36) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(36) == \'1\'" (click) = showStudentInformation(36)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(37) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(37) == \'1\'" (click) = showStudentInformation(37)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(38) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(38) == \'1\'" (click) = showStudentInformation(38)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(39) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(39) == \'1\'" (click) = showStudentInformation(39)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(40) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(40) == \'1\'" (click) = showStudentInformation(40)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(41) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(41) == \'1\'" (click) = showStudentInformation(41)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(42) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(42) == \'1\'" (click) = showStudentInformation(42)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(43) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(43) == \'1\'" (click) = showStudentInformation(43)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(44) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(44) == \'1\'" (click) = showStudentInformation(44)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(45) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(45) == \'1\'" (click) = showStudentInformation(45)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(46) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(46) == \'1\'" (click) = showStudentInformation(46)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(47) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(47) == \'1\'" (click) = showStudentInformation(47)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(48) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(48) == \'1\'" (click) = showStudentInformation(48)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(49) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(49) == \'1\'" (click) = showStudentInformation(49)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(50) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(50) == \'1\'" (click) = showStudentInformation(50)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(51) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(51) == \'1\'" (click) = showStudentInformation(51)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(52) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(52) == \'1\'" (click) = showStudentInformation(52)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(53) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(53) == \'1\'" (click) = showStudentInformation(53)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(54) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(54) == \'1\'" (click) = showStudentInformation(54)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(55) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(55) == \'1\'" (click) = showStudentInformation(55)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(56) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(56) == \'1\'" (click) = showStudentInformation(56)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(57) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(57) == \'1\'" (click) = showStudentInformation(57)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(58) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(58) == \'1\'" (click) = showStudentInformation(58)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(59) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(59) == \'1\'" (click) = showStudentInformation(59)></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(60) == \'0\'" (click) = studentNotExist()></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(60) == \'1\'" (click) = showStudentInformation(60)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <button ion-button block color="light-blue" round (click)="attend()">上课</button>\n    </ion-row>\n    <ion-row>\n      <button ion-button block color="light-blue" round (click)="finishClass()">下课</button>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label floating>查看信息</ion-label>\n        <ion-select onchange="window.location=this.value" [(ngModel)]="courseInformation" (ngModelChange)="relatedInformation()" interface="popover" style="height:45px;">\n          <ion-option value="studentList">学生名单</ion-option>\n          <ion-option value="absentStudentList">旷课及请假学生名单</ion-option>\n          <ion-option value="historyRecord">考勤历史记录</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-check-in\teacher-check-in.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _f || Object])
], TeacherCheckInPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=teacher-check-in.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentAttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_home_student_home__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentAttendancePage = (function () {
    function StudentAttendancePage(navCtrl, navParams, platform, http, alertMess, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.http = http;
        this.alertMess = alertMess;
        this.alertCtrl = alertCtrl;
        this.current_user = '';
        this.current_username = '';
        this.place_id = '';
        this.seatNumber = '';
        this.course_name = '';
        this.course_id = '';
        this.attendantStudents = new Array();
        this.current_user = this.navParams.get('current_user');
        console.log(this.current_user);
        this.current_username = this.navParams.get('current_username');
        console.log(this.current_username);
        this.place_id = this.navParams.get('place_id');
        console.log(this.place_id);
        this.course_id = this.navParams.get('course_id');
        console.log(this.course_id);
        this.course_name = this.navParams.get('course_name');
        console.log(this.course_name);
    }
    StudentAttendancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StudentAttendancePage');
        //发送请求（place_id）
        var getAttendantStudentRequest = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
        getAttendantStudentRequest.append('place_id', this.place_id);
        var getAttendantStudentURL = 'http://119.29.225.79:8080/login/SignInSuccessStudent';
        this.http.post(getAttendantStudentURL, getAttendantStudentRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
            //接收数据（place_id对应的已签到成功的学生名单()）
            console.log('attendant student: ' + data);
            for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                var student = _a[_i];
                _this.attendantStudents.push([student.sign_stuId, student.sign_stuName, student.sign_stuSeat]);
            }
            console.log(_this.attendantStudents);
        });
    };
    StudentAttendancePage.prototype.confirmSeatToSignIn = function () {
        var _this = this;
        if (this.signInTime != null) {
            this.alertMess.alertMessages('请不要重复签到！');
        }
        else {
            if (this.seatNumber == '') {
                this.alertMess.alertMessages("请选择您的座位！");
            }
            else {
                var row = (parseInt(this.seatNumber) - parseInt(this.seatNumber) % 10) / 10 + 1;
                var col = parseInt(this.seatNumber) % 10;
                var alert_1 = this.alertCtrl.create({
                    title: '信息',
                    message: '您的座位是： 第' + row + '行，第' + col + '列',
                    buttons: [{
                            text: '确认', handler: function () {
                                _this.signIn();
                            }
                        }, { text: '取消' }]
                });
                alert_1.present();
            }
        }
    };
    StudentAttendancePage.prototype.signIn = function () {
        var _this = this;
        var geoLocation = new BMap.Geolocation();
        var lng, lat;
        var teach_lng, teach_lat;
        geoLocation.getCurrentPosition(function (r) {
            lng = r.point.lng;
            lat = r.point.lat;
            console.log('您的位置：' + lng + ',' + lat);
            //发送请求（place_id）
            var getLocationRequest = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
            getLocationRequest.append('place_id', _this.place_id);
            var getLocationURL = 'http://119.29.225.79:8080/login/StudentGetPlace';
            _this.http.post(getLocationURL, getLocationRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
                //接收数据（place_id对应的经纬度）
                console.log('teacher location: ' + data.data);
                if (data.data == '') {
                    _this.alertMess.alertMessages('老师上课后才能进行签到！');
                }
                else {
                    teach_lng = data.data[0].place_longitude;
                    teach_lat = data.data[0].place_latitude;
                    var map = new BMap.Map("allmap");
                    var pointStudent = new BMap.Point(lng, lat); // 创建学生的点坐标
                    var pointTeacher = new BMap.Point(teach_lng, teach_lat); // 创建教师的点坐标，数据从服务器端获取
                    var distance = map.getDistance(pointTeacher, pointStudent).toFixed(2);
                    console.log('您与老师之间的距离是：' + distance + ' 米。'); //获取两点距离,保留小数点后两位
                    if (parseFloat(distance) < 50) {
                        console.log('Seat number: ' + _this.seatNumber);
                        //签到成功，回复数据（place_id + 账号）
                        var signInSuccessRequest = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
                        signInSuccessRequest.append('place_id', _this.place_id);
                        signInSuccessRequest.append('sign_stuId', _this.current_user);
                        signInSuccessRequest.append('sign_stuName', _this.current_username);
                        signInSuccessRequest.append('sign_stuSeat', _this.seatNumber);
                        signInSuccessRequest.append('sign_courseId', _this.course_id);
                        signInSuccessRequest.append('sign_courseName', _this.course_name);
                        var signInSuccessURL = 'http://119.29.225.79:8080/login/SignInPlace';
                        _this.http.post(signInSuccessURL, signInSuccessRequest).map(function (res) { return res.json(); }).subscribe();
                        var time = new Date();
                        _this.signInTime = time.getTime();
                        _this.alertMess.alertMessages('签到成功！');
                        console.log(time);
                        console.log(_this.signInTime);
                    }
                    else {
                        _this.alertMess.alertMessages('方圆五百里内似乎没有您的身影...请重新签到！');
                    }
                }
            });
        }, { enableHighAccuracy: true });
    };
    StudentAttendancePage.prototype.confirmSeatToSignOut = function () {
        var _this = this;
        if (this.seatNumber == '' || this.signInTime == null) {
            console.log(this.seatNumber);
            console.log(this.signInTime);
            this.alertMess.alertMessages("您还未签到！");
        }
        else {
            var time = new Date();
            this.signTimeInterval = time.getTime() - this.signInTime;
            console.log(time);
            console.log(this.signTimeInterval);
            if (this.signTimeInterval <= 30000) {
                this.alertMess.alertMessages('这才上课没多久呢！');
            }
            else {
                var alert_2 = this.alertCtrl.create({
                    title: '信息',
                    message: '您已上课' + (this.signTimeInterval / 60000) + '分钟',
                    buttons: [{
                            text: '确认', handler: function () {
                                _this.signOut();
                            }
                        }, { text: '取消' }]
                });
                alert_2.present();
            }
        }
    };
    StudentAttendancePage.prototype.signOut = function () {
        var _this = this;
        var geoLocation = new BMap.Geolocation();
        var lng, lat;
        var teach_lng, teach_lat;
        geoLocation.getCurrentPosition(function (r) {
            lng = r.point.lng;
            lat = r.point.lat;
            console.log('您的位置：' + lng + ',' + lat);
            //发送请求（place_id）
            var getLocationRequest = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
            getLocationRequest.append('place_id', _this.place_id);
            var getLocationURL = 'http://119.29.225.79:8080/login/StudentGetPlace';
            _this.http.post(getLocationURL, getLocationRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
                //接收数据（place_id对应的经纬度）
                console.log('teacher location: ' + data);
                teach_lng = data.data[0].place_longitude;
                teach_lat = data.data[0].place_latitude;
                var map = new BMap.Map("allmap");
                var pointStudent = new BMap.Point(lng, lat); // 创建学生的点坐标
                var pointTeacher = new BMap.Point(teach_lng, teach_lat); // 创建教师的点坐标，数据从服务器端获取
                var distance = map.getDistance(pointTeacher, pointStudent).toFixed(2);
                console.log('您与老师之间的距离是：' + distance + ' 米。'); //获取两点距离,保留小数点后两位
                if (parseFloat(distance) < 50) {
                    console.log('Seat number: ' + _this.seatNumber);
                    //签退成功，回复数据（place_id + 账号）
                    var alert_3 = _this.alertCtrl.create({
                        title: '信息',
                        message: '签退成功！',
                        buttons: [{ text: '确认', handler: function () { _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__student_home_student_home__["a" /* StudentHomePage */], { 'current_user': _this.current_user }); } }]
                    });
                    alert_3.present();
                }
                else {
                    _this.alertMess.alertMessages('方圆五百里内似乎没有您的身影...请重新签退！');
                }
            });
        }, { enableHighAccuracy: true });
    };
    StudentAttendancePage.prototype.selectSeatNumber = function (seat) {
        this.seatNumber = seat;
    };
    StudentAttendancePage.prototype.getStudentExistence = function (seat) {
        var exist = '0';
        for (var _i = 0, _a = this.attendantStudents; _i < _a.length; _i++) {
            var oneStu = _a[_i];
            if (oneStu[2] == seat) {
                exist = '1';
            }
        }
        return exist;
    };
    StudentAttendancePage.prototype.seatWarning = function () {
        this.alertMess.alertMessages("该位置有人！请选择您所在的真实位置进行签到！");
    };
    return StudentAttendancePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], StudentAttendancePage.prototype, "mapElement", void 0);
StudentAttendancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-student-attendance',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-attendance\student-attendance.html"*/'<!--\n  Generated template for the StudentAttendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{course_name}} 签到/签退</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="row">\n    <div class="col" style="text-align: center">讲台</div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(1) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(1) == \'0\'" (click) = selectSeatNumber(1)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(2) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(2) == \'0\'" (click) = selectSeatNumber(2)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(3) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(3) == \'0\'" (click) = selectSeatNumber(3)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(4) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(4) == \'0\'" (click) = selectSeatNumber(4)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(5) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(5) == \'0\'" (click) = selectSeatNumber(5)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(6) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(6) == \'0\'" (click) = selectSeatNumber(6)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(7) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(7) == \'0\'" (click) = selectSeatNumber(7)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(8) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(8) == \'0\'" (click) = selectSeatNumber(8)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(9) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(9) == \'0\'" (click) = selectSeatNumber(9)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(10) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(10) == \'0\'" (click) = selectSeatNumber(10)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(11) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(11) == \'0\'" (click) = selectSeatNumber(11)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(12) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(12) == \'0\'" (click) = selectSeatNumber(12)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(13) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(13) == \'0\'" (click) = selectSeatNumber(13)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(14) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(14) == \'0\'" (click) = selectSeatNumber(14)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(15) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(15) == \'0\'" (click) = selectSeatNumber(15)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(16) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(16) == \'0\'" (click) = selectSeatNumber(16)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(17) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(17) == \'0\'" (click) = selectSeatNumber(17)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(18) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(18) == \'0\'" (click) = selectSeatNumber(18)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(19) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(19) == \'0\'" (click) = selectSeatNumber(19)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(20) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(20) == \'0\'" (click) = selectSeatNumber(20)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(21) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(21) == \'0\'" (click) = selectSeatNumber(21)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(22) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(22) == \'0\'" (click) = selectSeatNumber(22)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(23) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(23) == \'0\'" (click) = selectSeatNumber(23)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(24) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(24) == \'0\'" (click) = selectSeatNumber(24)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(25) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(25) == \'0\'" (click) = selectSeatNumber(25)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(26) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(26) == \'0\'" (click) = selectSeatNumber(26)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(27) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(27) == \'0\'" (click) = selectSeatNumber(27)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(28) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(28) == \'0\'" (click) = selectSeatNumber(28)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(29) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(29) == \'0\'" (click) = selectSeatNumber(29)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(30) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(30) == \'0\'" (click) = selectSeatNumber(30)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(31) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(31) == \'0\'" (click) = selectSeatNumber(31)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(32) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(32) == \'0\'" (click) = selectSeatNumber(32)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(33) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(33) == \'0\'" (click) = selectSeatNumber(33)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(34) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(34) == \'0\'" (click) = selectSeatNumber(34)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(35) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(35) == \'0\'" (click) = selectSeatNumber(35)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(36) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(36) == \'0\'" (click) = selectSeatNumber(36)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(37) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(37) == \'0\'" (click) = selectSeatNumber(37)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(38) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(38) == \'0\'" (click) = selectSeatNumber(38)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(39) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(39) == \'0\'" (click) = selectSeatNumber(39)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(40) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(40) == \'0\'" (click) = selectSeatNumber(40)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(41) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(41) == \'0\'" (click) = selectSeatNumber(41)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(42) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(42) == \'0\'" (click) = selectSeatNumber(42)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(43) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(43) == \'0\'" (click) = selectSeatNumber(43)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(44) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(44) == \'0\'" (click) = selectSeatNumber(44)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(45) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(45) == \'0\'" (click) = selectSeatNumber(45)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(46) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(46) == \'0\'" (click) = selectSeatNumber(46)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(47) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(47) == \'0\'" (click) = selectSeatNumber(47)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(48) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(48) == \'0\'" (click) = selectSeatNumber(48)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(49) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(49) == \'0\'" (click) = selectSeatNumber(49)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(50) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(50) == \'0\'" (click) = selectSeatNumber(50)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n    <ion-row>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(51) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(51) == \'0\'" (click) = selectSeatNumber(51)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(52) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(52) == \'0\'" (click) = selectSeatNumber(52)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(53) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(53) == \'0\'" (click) = selectSeatNumber(53)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(54) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(54) == \'0\'" (click) = selectSeatNumber(54)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(55) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(55) == \'0\'" (click) = selectSeatNumber(55)></button>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(56) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(56) == \'0\'" (click) = selectSeatNumber(56)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(57) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(57) == \'0\'" (click) = selectSeatNumber(57)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(58) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(58) == \'0\'" (click) = selectSeatNumber(58)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(59) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(59) == \'0\'" (click) = selectSeatNumber(59)></button>\n      <button style="background: red; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(60) == \'1\'" (click) = seatWarning()></button>\n      <button style="background: grey; height: 30px; width: 8%; margin: 1px" *ngIf="getStudentExistence(60) == \'0\'" (click) = selectSeatNumber(60)></button>\n    </ion-row>\n\n    <ion-row style="background: white; height: 30px"></ion-row>\n\n  </ion-grid>\n\n\n  <ion-item no-lines></ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <button ion-button block color="light-blue" round (click)="confirmSeatToSignIn()">签到</button>\n    </ion-row>\n    <ion-row>\n      <button ion-button block color="light-blue" round (click)="confirmSeatToSignOut()">签退</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-attendance\student-attendance.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], StudentAttendancePage);

//# sourceMappingURL=student-attendance.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_information_change_information__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_change_password__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_local_storage_local_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_leave_apply_student_leave_apply__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_respond_student_respond__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__student_leave_student_leave__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the StudentManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentManagePage = (function () {
    function StudentManagePage(navCtrl, navParams, storage, alterCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alterCtrl = alterCtrl;
        this.current_user = '';
        this.current_user = this.navParams.get("current_user");
    }
    StudentManagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentManagePage');
    };
    StudentManagePage.prototype.toStudentLeaveApplyPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__student_leave_apply_student_leave_apply__["a" /* StudentLeaveApplyPage */], { 'current_user': this.current_user });
    };
    StudentManagePage.prototype.toStudentLeavePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__student_leave_student_leave__["a" /* StudentLeavePage */], { 'current_user': this.current_user });
    };
    StudentManagePage.prototype.toStudentRespondPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__student_respond_student_respond__["a" /* StudentRespondPage */], { 'current_user': this.current_user });
    };
    StudentManagePage.prototype.toChangeInformationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__change_information_change_information__["a" /* ChangeInformationPage */], { 'current_user': this.current_user });
    };
    StudentManagePage.prototype.toChangePasswordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__change_password_change_password__["a" /* ChangePasswordPage */], { 'current_user': this.current_user });
    };
    StudentManagePage.prototype.exit = function () {
        var _this = this;
        var alert = this.alterCtrl.create({
            title: '确认退出？',
            buttons: [{
                    text: '确定',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    }
                }, '取消']
        });
        alert.present();
    };
    return StudentManagePage;
}());
StudentManagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-student-manage',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-manage\student-manage.html"*/'<!--\n  Generated template for the StudentManagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>管理</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item style="height: 40px;font-size: large">\n      <ion-label>申请管理</ion-label>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toStudentLeaveApplyPage()">请假申请</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item style="height: 40px;font-size: large">\n      <ion-label>消息管理</ion-label>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toStudentLeavePage()">请假</button>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toStudentRespondPage()">管理员反馈</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item style="height: 40px;font-size: large">\n      <ion-label>个人中心</ion-label>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toChangeInformationPage()">修改资料</button>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toChangePasswordPage()">修改密码</button>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="exit()">退出登录</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-manage\student-manage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_local_storage_local_storage__["a" /* LocalStorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], StudentManagePage);

//# sourceMappingURL=student-manage.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLeaveApplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StudentLeaveApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentLeaveApplyPage = (function () {
    function StudentLeaveApplyPage(navCtrl, navParams, http, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alert = alert;
        this.allCourses = new Array();
        this.course_towho = '';
        this.student_name = '';
        this.leave = {
            course_id: '',
            course_name: '',
            student_id: '',
            student_name: '',
            leave_reason: '',
        };
        this.current_user = this.navParams.get('current_user');
        console.log("leave page: " + this.current_user);
    }
    StudentLeaveApplyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StudentLeaveApplyPage');
        //发送请求（账号），接收回复（所有课程信息）
        var courseRequest = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* URLSearchParams */]();
        courseRequest.append('student_id', this.current_user);
        var courseURL = 'http://119.29.225.79:8080/login/CourseByStudentId';
        this.http.post(courseURL, courseRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('data...');
            console.log(JSON.stringify(data));
            for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                var course = _a[_i];
                _this.allCourses.push([course.course_name, course.course_day, course.class_scope, course.place_id1, course.course_towho, course.student_name, course.course_id]);
            }
            _this.course_towho = _this.allCourses[0][4];
            _this.student_name = _this.allCourses[0][5];
            console.log(_this.allCourses);
        });
    };
    StudentLeaveApplyPage.prototype.getInformation = function () {
        for (var _i = 0, _a = this.allCourses; _i < _a.length; _i++) {
            var course = _a[_i];
            if (course[0] == this.leave.course_name) {
                this.leave.course_id = course[6];
                this.leave.student_name = course[5];
            }
        }
    };
    StudentLeaveApplyPage.prototype.submit = function () {
        if (this.leave.course_name == '') {
            this.alert.alertMessages('请选择课程名称！');
        }
        else {
            if (this.leave.leave_reason == '') {
                this.alert.alertMessages('请选择请假理由！');
            }
            else {
                this.getInformation();
                //发送请求（账号），接收回复（所有课程信息）
                var leaveRequest = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* URLSearchParams */]();
                leaveRequest.append('student_id', this.current_user);
                leaveRequest.append('student_name', this.leave.student_name);
                leaveRequest.append('course_id', this.leave.course_id);
                leaveRequest.append('course_name', this.leave.course_name);
                leaveRequest.append('leave_reason', this.leave.leave_reason);
                console.log(this.leave);
                var leaveURL = 'http://119.29.225.79:8080/login/StudentAskLeave';
                this.http.post(leaveURL, leaveRequest).map(function (res) { return res.json(); }).subscribe();
                this.alert.alertMessages('假条已提交成功！');
                this.navCtrl.pop();
            }
        }
    };
    return StudentLeaveApplyPage;
}());
StudentLeaveApplyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-student-leave-apply',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-leave-apply\student-leave-apply.html"*/'<!--\n  Generated template for the StudentLeaveApplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>请假申请</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row>\n      <ion-item>\n        <ion-label floating>选择课程</ion-label>\n        <ion-select onchange="window.location=this.value" [(ngModel)]="leave.course_name" interface="popover" style="height:45px;">\n          <ion-option *ngFor="let course of allCourses" value="{{course[0]}}">{{course[0]}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n\n    <ion-row>\n      <ion-item>\n        <ion-label floating>请假原因</ion-label>\n        <ion-select onchange="window.location=this.value" [(ngModel)]="leave.leave_reason" interface="popover" style="height:45px;">\n          <ion-option value="想写代码">想写代码</ion-option>\n          <ion-option value="卧病在床">卧病在床</ion-option>\n          <ion-option value="回家种田">回家种田</ion-option>\n          <ion-option value="外出相亲">外出相亲</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n\n  <div class="row">\n    <button type="submit" ion-button block color="light-blue" round (click)="submit()">提交</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-leave-apply\student-leave-apply.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]])
], StudentLeaveApplyPage);

//# sourceMappingURL=student-leave-apply.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentRespondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StudentRespondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentRespondPage = (function () {
    function StudentRespondPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    StudentRespondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentRespondPage');
    };
    StudentRespondPage.prototype.submit = function () {
        this.alert.alertMessages('功能开发中，敬请期待...');
    };
    return StudentRespondPage;
}());
StudentRespondPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-student-respond',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-respond\student-respond.html"*/'<!--\n  Generated template for the StudentRespondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>管理员反馈</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">旷课数报警</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">超预警线提示</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-respond\student-respond.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]])
], StudentRespondPage);

//# sourceMappingURL=student-respond.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StudentLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentLeavePage = (function () {
    function StudentLeavePage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    StudentLeavePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentLeavePage');
    };
    StudentLeavePage.prototype.submit = function () {
        this.alert.alertMessages('功能开发中，敬请期待...');
    };
    return StudentLeavePage;
}());
StudentLeavePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-student-leave',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-leave\student-leave.html"*/'<!--\n  Generated template for the StudentLeavePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>请假管理</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">待审核</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">已通过</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="submit()">未通过</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-leave\student-leave.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]])
], StudentLeavePage);

//# sourceMappingURL=student-leave.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordForgottenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PasswordForgottenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordForgottenPage = (function () {
    function PasswordForgottenPage(navCtrl, navParams, alert, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.http = http;
        this.forgotten = {
            account: '',
            id: ''
        };
    }
    PasswordForgottenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordForgottenPage');
    };
    PasswordForgottenPage.prototype.resetPassword = function () {
        var _this = this;
        if (this.forgotten.account == '') {
            this.alert.alertMessages('请输入账号！');
        }
        else {
            if (this.forgotten.id == '') {
                this.alert.alertMessages('请输入工号或学号！');
            }
            else {
                //发送请求（账号 + 工号/学号），接收数据（空 或 对应的信息）
                var useridRequest = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* URLSearchParams */]();
                useridRequest.append('username', this.forgotten.account);
                useridRequest.append('userid', this.forgotten.id);
                var useridURL = 'http://119.29.225.79:8080/login/ResetPassword';
                this.http.post(useridURL, useridRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log(JSON.stringify(data));
                    if (data.data[0].status == 'useridWrong') {
                        _this.alert.alertMessages('账号或工号/学号输入错误！');
                    }
                    else {
                        _this.alert.alertMessages('密码已重置为123456，请进入系统进行密码修改！');
                        _this.navCtrl.pop();
                    }
                });
            }
        }
    };
    return PasswordForgottenPage;
}());
PasswordForgottenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-password-forgotten',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\password-forgotten\password-forgotten.html"*/'<!--\n  Generated template for the PasswordForgottenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>密码重置</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>账号</ion-label>\n      <ion-input name="account" [(ngModel)]=\'forgotten.account\'></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>工号/学号</ion-label>\n      <ion-input name="phone" [(ngModel)]=\'forgotten.id\'></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block color="light-blue" round (click)="resetPassword()">确定</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\password-forgotten\password-forgotten.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], PasswordForgottenPage);

//# sourceMappingURL=password-forgotten.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertProvider = (function () {
    function AlertProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
        console.log('Hello AlertProvider Provider');
    }
    AlertProvider.prototype.alertMessages = function (mess) {
        var alert = this.alertCtrl.create({
            title: '信息',
            message: mess,
            buttons: ['确定']
        });
        alert.present();
    };
    return AlertProvider;
}());
AlertProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], AlertProvider);

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/change-information/change-information.module": [
		283,
		17
	],
	"../pages/change-password/change-password.module": [
		284,
		16
	],
	"../pages/login/login.module": [
		285,
		15
	],
	"../pages/password-forgotten/password-forgotten.module": [
		286,
		14
	],
	"../pages/register/register.module": [
		287,
		13
	],
	"../pages/student-attendance/student-attendance.module": [
		288,
		12
	],
	"../pages/student-home/student-home.module": [
		289,
		11
	],
	"../pages/student-leave-apply/student-leave-apply.module": [
		290,
		10
	],
	"../pages/student-leave/student-leave.module": [
		291,
		9
	],
	"../pages/student-manage/student-manage.module": [
		292,
		8
	],
	"../pages/student-respond/student-respond.module": [
		293,
		7
	],
	"../pages/teacher-apply/teacher-apply.module": [
		294,
		6
	],
	"../pages/teacher-check-in/teacher-check-in.module": [
		295,
		5
	],
	"../pages/teacher-home/teacher-home.module": [
		296,
		4
	],
	"../pages/teacher-leave/teacher-leave.module": [
		297,
		3
	],
	"../pages/teacher-manage/teacher-manage.module": [
		298,
		2
	],
	"../pages/teacher-report/teacher-report.module": [
		299,
		1
	],
	"../pages/teacher-respond/teacher-respond.module": [
		300,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_password_forgotten_password_forgotten__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_student_home_student_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_teacher_home_teacher_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_student_attendance_student_attendance__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_alert_alert__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_teacher_respond_teacher_respond__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_teacher_manage_teacher_manage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_teacher_leave_teacher_leave__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_teacher_report_teacher_report__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_teacher_check_in_teacher_check_in__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_teacher_apply_teacher_apply__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_student_manage_student_manage__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_student_respond_student_respond__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_student_leave_student_leave__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_student_leave_apply_student_leave_apply__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_change_password_change_password__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_change_information_change_information__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_local_storage_local_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_password_forgotten_password_forgotten__["a" /* PasswordForgottenPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_teacher_home_teacher_home__["a" /* TeacherHomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_teacher_check_in_teacher_check_in__["a" /* TeacherCheckInPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_teacher_apply_teacher_apply__["a" /* TeacherApplyPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_teacher_leave_teacher_leave__["a" /* TeacherLeavePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_teacher_manage_teacher_manage__["a" /* TeacherManagePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_teacher_report_teacher_report__["a" /* TeacherReportPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_teacher_respond_teacher_respond__["a" /* TeacherRespondPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_student_home_student_home__["a" /* StudentHomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_student_attendance_student_attendance__["a" /* StudentAttendancePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_student_manage_student_manage__["a" /* StudentManagePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_student_respond_student_respond__["a" /* StudentRespondPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_student_leave_student_leave__["a" /* StudentLeavePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_student_leave_apply_student_leave_apply__["a" /* StudentLeaveApplyPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_change_information_change_information__["a" /* ChangeInformationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/change-information/change-information.module#ChangeInformationPageModule', name: 'ChangeInformationPage', segment: 'change-information', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/password-forgotten/password-forgotten.module#PasswordForgottenPageModule', name: 'PasswordForgottenPage', segment: 'password-forgotten', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/student-attendance/student-attendance.module#StudentAttendancePageModule', name: 'StudentAttendancePage', segment: 'student-attendance', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/student-home/student-home.module#StudentHomePageModule', name: 'StudentHomePage', segment: 'student-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/student-leave-apply/student-leave-apply.module#StudentLeaveApplyPageModule', name: 'StudentLeaveApplyPage', segment: 'student-leave-apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/student-leave/student-leave.module#StudentLeavePageModule', name: 'StudentLeavePage', segment: 'student-leave', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/student-manage/student-manage.module#StudentManagePageModule', name: 'StudentManagePage', segment: 'student-manage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/student-respond/student-respond.module#StudentRespondPageModule', name: 'StudentRespondPage', segment: 'student-respond', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacher-apply/teacher-apply.module#TeacherApplyPageModule', name: 'TeacherApplyPage', segment: 'teacher-apply', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacher-check-in/teacher-check-in.module#TeacherCheckInPageModule', name: 'TeacherCheckInPage', segment: 'teacher-check-in', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacher-home/teacher-home.module#TeacherHomePageModule', name: 'TeacherHomePage', segment: 'teacher-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacher-leave/teacher-leave.module#TeacherLeavePageModule', name: 'TeacherLeavePage', segment: 'teacher-leave', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacher-manage/teacher-manage.module#TeacherManagePageModule', name: 'TeacherManagePage', segment: 'teacher-manage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacher-report/teacher-report.module#TeacherReportPageModule', name: 'TeacherReportPage', segment: 'teacher-report', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacher-respond/teacher-respond.module#TeacherRespondPageModule', name: 'TeacherRespondPage', segment: 'teacher-respond', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_password_forgotten_password_forgotten__["a" /* PasswordForgottenPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_teacher_home_teacher_home__["a" /* TeacherHomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_teacher_check_in_teacher_check_in__["a" /* TeacherCheckInPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_teacher_apply_teacher_apply__["a" /* TeacherApplyPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_teacher_leave_teacher_leave__["a" /* TeacherLeavePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_teacher_manage_teacher_manage__["a" /* TeacherManagePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_teacher_report_teacher_report__["a" /* TeacherReportPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_teacher_respond_teacher_respond__["a" /* TeacherRespondPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_student_home_student_home__["a" /* StudentHomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_student_attendance_student_attendance__["a" /* StudentAttendancePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_student_manage_student_manage__["a" /* StudentManagePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_student_respond_student_respond__["a" /* StudentRespondPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_student_leave_student_leave__["a" /* StudentLeavePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_student_leave_apply_student_leave_apply__["a" /* StudentLeaveApplyPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_change_information_change_information__["a" /* ChangeInformationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_local_storage_local_storage__["a" /* LocalStorageProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacher_home_teacher_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_home_student_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__password_forgotten_password_forgotten__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl, navParams, alertMess, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertMess = alertMess;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = LoginPage_1;
        this.login = {
            identity: '',
            account: '',
            password: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.toForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__password_forgotten_password_forgotten__["a" /* PasswordForgottenPage */]);
    };
    LoginPage.prototype.toRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.toLogin = function () {
        var _this = this;
        if (this.login.account == '') {
            this.alertMess.alertMessages('请输入账号！');
        }
        else {
            //发送请求（账号 + 密码），接收回复（空 或 对应的所有信息）
            var loginRequest = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* URLSearchParams */]();
            loginRequest.append('username', this.login.account);
            loginRequest.append('password', this.login.password);
            var loginURL = 'http://119.29.225.79:8080/login/LoginJudge';
            this.http.post(loginURL, loginRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(JSON.stringify(data));
                if (data.data.length != '0') {
                    console.log('role: ' + data.data[0].role);
                    if (data.data[0].role == '1') {
                        var loading_teach_1 = _this.loadingCtrl.create({
                            content: '正在进入教师页面...' //数据加载中显示
                        });
                        loading_teach_1.present();
                        setTimeout(function () {
                            loading_teach_1.dismiss(); //显示多久消失
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__teacher_home_teacher_home__["a" /* TeacherHomePage */], { 'current_user': data.data[0].userid });
                        }, 2000);
                    }
                    else if (data.data[0].role == '2') {
                        var loading_stu_1 = _this.loadingCtrl.create({
                            content: '正在进入学生页面...' //数据加载中显示
                        });
                        loading_stu_1.present();
                        setTimeout(function () {
                            loading_stu_1.dismiss(); //显示多久消失
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__student_home_student_home__["a" /* StudentHomePage */], { 'current_user': data.data[0].userid });
                        }, 2000);
                    }
                }
                else {
                    _this.alertMess.alertMessages('账号或密码输入有误！');
                }
            });
        }
    };
    LoginPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: '登录中...' //数据加载中显示
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss(); //显示多久消失
        }, 5000);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="light-blue">\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <img src="assets/images/login.jpg" alt="">\n  <div padding-left padding-right>\n\n    <ion-list padding-right no-margin>\n      <ion-item>\n        <ion-label floating>账号</ion-label>\n        <ion-input name="account" type=\'text\' [(ngModel)]=\'login.account\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>密码</ion-label>\n        <ion-input name="password" type="password" [(ngModel)]=\'login.password\'></ion-input>\n      </ion-item>\n\n      <ion-item no-lines></ion-item>\n    </ion-list>\n\n    <ion-grid>\n      <ion-row>\n        <button ion-button block color="light-blue" round (click)="toLogin()">登录</button>\n      </ion-row>\n      <ion-row text-center>\n        <ion-col (click)="toForgotPassword()">忘记密码？</ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChangeInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeInformationPage = (function () {
    function ChangeInformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changeinformation = {
            college: '',
            major: '',
            year: ''
        };
    }
    ChangeInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeInformationPage');
    };
    ChangeInformationPage.prototype.submit = function () {
        this.navCtrl.pop();
    };
    return ChangeInformationPage;
}());
ChangeInformationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-change-information',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\change-information\change-information.html"*/'<!--\n  Generated template for the ChangeInformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>修改资料</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>手机号</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>学院</ion-label>\n      <ion-select name="college" [(ngModel)]="changeinformation.college">\n        <ion-option value="shuji">数计</ion-option>\n        <ion-option value="jingguan">经管</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>专业</ion-label>\n      <ion-select name="major" [(ngModel)]="changeinformation.major">\n        <ion-option value="jisuanjijishu">计算机技术</ion-option>\n        <ion-option value="ruanjiangongcheng">软件工程</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>入学年份</ion-label>\n      <ion-select name="year" [(ngModel)]="changeinformation.year">\n        <ion-option value="2017">2017</ion-option>\n        <ion-option value="2018">2018</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <button type="submit" ion-button block color="light-blue" round (click)="submit()">保存</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\change-information\change-information.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ChangeInformationPage);

//# sourceMappingURL=change-information.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, alertMess, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertMess = alertMess;
        this.http = http;
        this.current_user = '';
        this.changepassword = {
            oldpassword: '',
            newpassword: '',
            newconfirmpassword: ''
        };
        this.current_user = this.navParams.get('current_user');
        console.log(this.current_user);
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.submit = function () {
        if (this.changepassword.newconfirmpassword.toString() != this.changepassword.newpassword.toString()) {
            this.alertMess.alertMessages('两次密码输入不同！请重新输入！');
        }
        else {
            //发送请求（账号 + 新密码）
            var changePasswordRequest = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
            changePasswordRequest.append('userid', this.current_user);
            changePasswordRequest.append('password', this.changepassword.newpassword);
            var changePasswordURL = 'http://119.29.225.79:8080/login/ModifyPassword';
            this.http.post(changePasswordURL, changePasswordRequest).map(function (res) { return res.json(); }).subscribe();
            this.alertMess.alertMessages('密码修改成功！');
            this.navCtrl.pop();
        }
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-change-password',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\change-password\change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>修改密码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n  <ion-item>\n    <ion-label floating>请输入新密码</ion-label>\n    <ion-input name="NewPassword" type="password" [(ngModel)]=\'changepassword.newpassword\'></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>请再次确认新密码</ion-label>\n    <ion-input name="NewConfirmPassword" type="password"[(ngModel)]=\'changepassword.newconfirmpassword\'></ion-input>\n  </ion-item>\n  </ion-list>\n\n  <button type="submit" ion-button block color="light-blue" round (click)="submit()">完成</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\change-password\change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password_change_password__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_information_change_information__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_local_storage_local_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teacher_report_teacher_report__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teacher_apply_teacher_apply__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teacher_leave_teacher_leave__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__teacher_respond_teacher_respond__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the TeacherManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherManagePage = (function () {
    function TeacherManagePage(navCtrl, navParams, storage, alterCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alterCtrl = alterCtrl;
        this.current_user = '';
        this.current_user = this.navParams.get('current_user');
    }
    TeacherManagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherManagePage');
    };
    TeacherManagePage.prototype.toTeacherReportPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__teacher_report_teacher_report__["a" /* TeacherReportPage */], { 'current_user': this.current_user });
    };
    TeacherManagePage.prototype.toTeacherApplyPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__teacher_apply_teacher_apply__["a" /* TeacherApplyPage */], { 'current_user': this.current_user });
    };
    TeacherManagePage.prototype.toTeacherLeavePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__teacher_leave_teacher_leave__["a" /* TeacherLeavePage */], { 'current_user': this.current_user });
    };
    TeacherManagePage.prototype.toTeacherRespondPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__teacher_respond_teacher_respond__["a" /* TeacherRespondPage */], { 'current_user': this.current_user });
    };
    TeacherManagePage.prototype.toChangeInformationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__change_information_change_information__["a" /* ChangeInformationPage */], { 'current_user': this.current_user });
    };
    TeacherManagePage.prototype.toChangePasswordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__change_password_change_password__["a" /* ChangePasswordPage */], { 'current_user': this.current_user });
    };
    TeacherManagePage.prototype.exit = function () {
        var _this = this;
        var alert = this.alterCtrl.create({
            title: '确认退出？',
            buttons: [{
                    text: '确定',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    }
                }, '取消']
        });
        alert.present();
    };
    return TeacherManagePage;
}());
TeacherManagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teacher-manage',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-manage\teacher-manage.html"*/'<!--\n  Generated template for the TeacherManagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>管理</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item style="height: 40px;font-size: large">\n      <ion-label>上传与申请</ion-label>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toTeacherReportPage()">上报</button>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toTeacherApplyPage()">申请</button>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium">上传考勤汇总</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item style="height: 40px;font-size: large">\n      <ion-label>消息管理</ion-label>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toTeacherLeavePage()">学生请假</button>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toTeacherRespondPage()">管理员反馈</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item style="height: 40px;font-size: large">\n      <ion-label>个人中心</ion-label>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toChangeInformationPage()">修改资料</button>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="toChangePasswordPage()">修改密码</button>\n    </ion-item>\n    <ion-item style="height: 30px">\n      <button ion-button clear style="height: 20px;font-size: medium" (click)="exit()">退出登录</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\teacher-manage\teacher-manage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_local_storage_local_storage__["a" /* LocalStorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], TeacherManagePage);

//# sourceMappingURL=teacher-manage.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_attendance_student_attendance__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_manage_student_manage__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the StudentHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentHomePage = (function () {
    function StudentHomePage(navCtrl, navParams, alert, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.http = http;
        this.current_user = '';
        this.allCourses = new Array();
        this.course_towho = '';
        this.student_name = '';
        this.today = '';
        this.current_user = this.navParams.get('current_user');
        console.log(this.current_user);
    }
    StudentHomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StudentHomePage');
        var day = new Date().getDay();
        switch (day) {
            case 0: this.today = '星期一';
            case 1: this.today = '星期二';
            case 2: this.today = '星期三';
            case 3: this.today = '星期四';
            case 4: this.today = '星期五';
            case 5: this.today = '星期六';
            case 6: this.today = '星期天';
        }
        console.log(this.today);
        //发送请求（账号），接收回复（所有课程信息）
        var courseRequest = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* URLSearchParams */]();
        courseRequest.append('student_id', this.current_user);
        var courseURL = 'http://119.29.225.79:8080/login/CourseByStudentId';
        this.http.post(courseURL, courseRequest).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('data...');
            console.log(JSON.stringify(data));
            for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                var course = _a[_i];
                _this.allCourses.push([course.course_name, course.course_day, course.class_scope, course.place_id1, course.course_towho, course.student_name, course.course_id]);
            }
            _this.course_towho = _this.allCourses[0][4];
            _this.student_name = _this.allCourses[0][5];
            console.log(_this.allCourses);
        });
    };
    StudentHomePage.prototype.courseExist = function (day, scope) {
        var cName = '';
        for (var _i = 0, _a = this.allCourses; _i < _a.length; _i++) {
            var oneCourse = _a[_i];
            if (oneCourse[1] == day && oneCourse[2] == scope) {
                cName = oneCourse[0];
            }
        }
        return cName;
    };
    StudentHomePage.prototype.attendance = function (course_name) {
        var place_id = '', course_id = '', course_day = '';
        for (var _i = 0, _a = this.allCourses; _i < _a.length; _i++) {
            var oneCourse = _a[_i];
            if (oneCourse[0] == course_name) {
                course_day = oneCourse[1];
                place_id = oneCourse[3];
                course_id = oneCourse[6];
                console.log(course_name);
                console.log(course_day);
                console.log(place_id);
                console.log(course_id);
            }
        }
        if (course_day != this.today) {
            this.alert.alertMessages('不是今天的课程不能进行签到哦');
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__student_attendance_student_attendance__["a" /* StudentAttendancePage */], {
                'current_user': this.current_user,
                'place_id': place_id,
                'current_username': this.student_name,
                'course_name': course_name,
                'course_id': course_id
            });
        }
    };
    StudentHomePage.prototype.toStudentManage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__student_manage_student_manage__["a" /* StudentManagePage */], { 'current_user': this.current_user });
    };
    return StudentHomePage;
}());
StudentHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-student-home',template:/*ion-inline-start:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-home\student-home.html"*/'<!--\n  Generated template for the StudentHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{student_name}}的本周课程</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light-blue" (click)="toStudentManage()">管理</button>\n      </ion-col>\n      <ion-col>\n        <ion-label>{{course_towho}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <!-- 课程数据 -->\n      <ion-col style="width: 9%">\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 40px">1</ion-row>\n        <ion-row style="height: 40px">2</ion-row>\n        <ion-row style="height: 40px">3</ion-row>\n        <ion-row style="height: 40px">4</ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 40px">5</ion-row>\n        <ion-row style="height: 40px">6</ion-row>\n        <ion-row style="height: 40px">7</ion-row>\n        <ion-row style="height: 40px">8</ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 40px">9</ion-row>\n        <ion-row style="height: 40px">10</ion-row>\n        <ion-row style="height: 40px">11</ion-row>\n        <ion-row style="height: 40px">12</ion-row>\n      </ion-col>\n\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周一</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'1-2节\'))">{{courseExist(\'星期一\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'3-4节\'))">{{courseExist(\'星期一\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'5-6节\'))">{{courseExist(\'星期一\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'7-8节\'))">{{courseExist(\'星期一\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'9-10节\'))">{{courseExist(\'星期一\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期一\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期一\',\'11-12节\'))">{{courseExist(\'星期一\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周二</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'1-2节\'))">{{courseExist(\'星期二\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'3-4节\'))">{{courseExist(\'星期二\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'5-6节\'))">{{courseExist(\'星期二\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'7-8节\'))">{{courseExist(\'星期二\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'9-10节\'))">{{courseExist(\'星期二\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期二\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期二\',\'11-12节\'))">{{courseExist(\'星期二\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周三</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'1-2节\'))">{{courseExist(\'星期三\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'3-4节\'))">{{courseExist(\'星期三\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'5-6节\'))">{{courseExist(\'星期三\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'7-8节\'))">{{courseExist(\'星期三\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'9-10节\'))">{{courseExist(\'星期三\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期三\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期三\',\'11-12节\'))">{{courseExist(\'星期三\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周四</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'1-2节\'))">{{courseExist(\'星期四\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'3-4节\'))">{{courseExist(\'星期四\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'5-6节\'))">{{courseExist(\'星期四\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'7-8节\'))">{{courseExist(\'星期四\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'9-10节\'))">{{courseExist(\'星期四\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期四\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期四\',\'11-12节\'))">{{courseExist(\'星期四\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周五</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'1-2节\'))">{{courseExist(\'星期五\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'3-4节\'))">{{courseExist(\'星期五\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'5-6节\'))">{{courseExist(\'星期五\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'7-8节\'))">{{courseExist(\'星期五\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'9-10节\'))">{{courseExist(\'星期五\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期五\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期五\',\'11-12节\'))">{{courseExist(\'星期五\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周六</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'1-2节\'))">{{courseExist(\'星期六\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'3-4节\'))">{{courseExist(\'星期六\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'5-6节\'))">{{courseExist(\'星期六\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'7-8节\'))">{{courseExist(\'星期六\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'9-10节\'))">{{courseExist(\'星期六\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期六\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期六\',\'11-12节\'))">{{courseExist(\'星期六\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n\n      <ion-col style="width: 13%">\n        <ion-row style="height: 40px; text-align: center">周天</ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'1-2节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'1-2节\'))">{{courseExist(\'星期天\',\'1-2节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'3-4节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'3-4节\'))">{{courseExist(\'星期天\',\'3-4节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'5-6节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'5-6节\'))">{{courseExist(\'星期天\',\'5-6节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'7-8节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'7-8节\'))">{{courseExist(\'星期天\',\'7-8节\')}}</button></ion-row>\n        <ion-row style="height: 40px"></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'9-10节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'9-10节\'))">{{courseExist(\'星期天\',\'9-10节\')}}</button></ion-row>\n        <ion-row style="height: 80px"><button style="height: 100%" *ngIf="courseExist(\'星期天\',\'11-12节\') != \'\'" ion-button color="light-blue" (click)="attendance(courseExist(\'星期天\',\'11-12节\'))">{{courseExist(\'星期天\',\'11-12节\')}}</button></ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\56366\Desktop\研究生课程\软件工程实践\AttendanceMaster\src\pages\student-home\student-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], StudentHomePage);

//# sourceMappingURL=student-home.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalStorageProvider = (function () {
    function LocalStorageProvider(http) {
        this.http = http;
        this.storage = window.localStorage;
        console.log('Hello LocalStorageProvider Provider');
    }
    LocalStorageProvider.prototype.get = function (key, defaultValue) {
        var value = this.storage.getItem(key);
        try {
            value = JSON.parse(value);
        }
        catch (error) {
            value = null;
        }
        if (value == null && defaultValue) {
            value = defaultValue;
        }
        return value;
    };
    LocalStorageProvider.prototype.set = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    LocalStorageProvider.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    return LocalStorageProvider;
}());
LocalStorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], LocalStorageProvider);

//# sourceMappingURL=local-storage.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map