webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notfound404_notfound404_component__ = __webpack_require__("../../../../../src/app/notfound404/notfound404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assignproject_assignproject_component__ = __webpack_require__("../../../../../src/app/assignproject/assignproject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gaurd_auth_guard__ = __webpack_require__("../../../../../src/app/gaurd/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__employee_employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__employee_employee_component__ = __webpack_require__("../../../../../src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__project_projectfilter_pipe__ = __webpack_require__("../../../../../src/app/project/projectfilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__employee_employeefilter_pipe__ = __webpack_require__("../../../../../src/app/employee/employeefilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_default_dashboard_default_component__ = __webpack_require__("../../../../../src/app/dashboard-default/dashboard-default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__gaurd_auth_guard__["a" /* AuthGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_22__dashboard_default_dashboard_default_component__["a" /* DashboardDefaultComponent */] },
            { path: 'employee', component: __WEBPACK_IMPORTED_MODULE_17__employee_employee_component__["a" /* EmployeeComponent */] },
            { path: 'project', component: __WEBPACK_IMPORTED_MODULE_18__project_project_component__["a" /* ProjectComponent */] },
            { path: 'manageproject', component: __WEBPACK_IMPORTED_MODULE_10__assignproject_assignproject_component__["a" /* AssignprojectComponent */] }
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__notfound404_notfound404_component__["a" /* Notfound404Component */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__gaurd_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__project_projectfilter_pipe__["a" /* ProjectFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_20__employee_employeefilter_pipe__["a" /* EmployeefilterPipe */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__notfound404_notfound404_component__["a" /* Notfound404Component */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__assignproject_assignproject_component__["a" /* AssignprojectComponent */],
                __WEBPACK_IMPORTED_MODULE_17__employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dashboard_default_dashboard_default_component__["a" /* DashboardDefaultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__project_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_13__employee_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_12__gaurd_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = (function () {
    function AppService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.API_ENDPOINT = 'http://localhost:8080/';
    }
    AppService.prototype.apiEndPoint = function () {
        return this.API_ENDPOINT;
    };
    AppService.prototype.obtainAccessToken = function (user) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', user.email);
        params.append('password', user.password);
        params.append('grant_type', 'password');
        params.append('client_id', 'my-trusted-client');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa("my-trusted-client:secret") });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.post(this.API_ENDPOINT + 'oauth/token', params.toString(), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // Save the token in cookie
            _this.saveToken(data);
            // Goto dashboard page after successfully logged in
            _this._router.navigate(['/dashboard']);
        }, function (err) {
            console.log("Error occurred while login.");
            _this._router.navigate(['/login']);
        });
    };
    AppService.prototype.saveToken = function (token) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].set("ems_access_token", token.access_token, expireDate);
    };
    AppService.prototype.checkCredentials = function () {
        if (__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].check('ems_access_token')) {
            return true;
        }
        return false;
    };
    AppService.prototype.getToken = function () {
        return __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].get('ems_access_token');
    };
    AppService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].delete('ems_access_token');
        console.log("Logout : " + !__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].get('ems_access_token'));
        this._router.navigate(['/login']);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/assignproject/assignproject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/assignproject/assignproject.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row\">\n\t<div class=\"w3-col m6 l2 w3-padding\" *ngIf=\"projects && projects.length==0\">\n\t\t<p>You have not added any project till now.</p>\n\t</div>\n\t<div class=\"w3-col m6 l2 w3-padding\" *ngIf=\"projects && projects.length>0\">\n\t\t<div class=\"w3-large\">\n\t\t\t<p>Project</p>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<p>Please select the project</p>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<select class=\"w3-select w3-border\" name=\"option\" (change)=\"changeProject()\" [(ngModel)]=\"selectedProject\" >\n\t\t\t\t<option *ngFor=\"let project of projects\" [id]=\"project.id\" [ngValue]=\"project\" >{{project.name}}</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<div class=\"w3-col m6 l3 w3-padding\" *ngIf=\"projects && employees && projects.length>0 && employees.length==0\">\n\t\t<p>You have not added any employee till now.</p>\n\t</div>\n\t<div *ngIf=\"employees && employees.length>0\">\n\t\t<div class=\"w3-col m6 l3 w3-padding\" *ngIf=\"selectedProject\">\n\t\t\t<div class=\"w3-large\">\n\t\t\t\t<p>Employee</p>\n\t\t\t</div>\n\t\t\t<div class=\"w3-responsive w3-border\" style=\"height: 300px; overflow: auto;\">\n\t\t\t\t<table class=\"w3-table w3-striped w3-bordered w3-border w3-hoverable\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr class=\"w3-row\" *ngFor=\"let employee of employees\">\n\t\t\t\t\t\t\t<label for=\"chkEmployee_{{employee.id}}\" class=\"w3-padding\">\n\t\t\t\t\t\t\t\t<input id=\"chkEmployee_{{employee.id}}\" type=\"checkbox\" [checked]=\"selection.indexOf(employee) > -1\" (change)=\"toggleSelection(employee)\" />\n\t\t\t\t\t\t\t\t{{employee.name}}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"w3-row w3-margin-top\">\n\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t<a (click)=\"cancel()\" class=\"w3-btn w3-red w3-block\">Cancel</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\tclass=\"w3-btn w3-orange w3-text-white w3-block\" (click)=\"clear()\">Clear</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t<button type=\"button\" class=\"w3-btn w3-green w3-block\" (click)=\"assignEmployeesToProject()\" >Assign</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/assignproject/assignproject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignprojectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssignprojectComponent = (function () {
    function AssignprojectComponent(projectService, employeeService, router, appService) {
        this.projectService = projectService;
        this.employeeService = employeeService;
        this.router = router;
        this.appService = appService;
        this.selection = [];
        this.selectionIds = [];
        this.updated = false;
        // this.activeUser=appService.getActiveUser();
    }
    AssignprojectComponent.prototype.ngOnInit = function () {
        console.log("Inside ProjectComponent");
        this.getAllEmployees();
        this.getAllProjects();
    };
    AssignprojectComponent.prototype.getAllProjects = function () {
        var _this = this;
        return this.projectService.findAll().subscribe(function (projects) {
            _this.projects = projects;
            if (_this.projects.length > 0) {
                _this.selectedProject = _this.projects[0];
                _this.changeProject();
            }
        }, function (err) {
            console.log(err);
            _this.appService.logout();
        });
    };
    AssignprojectComponent.prototype.getAllEmployees = function () {
        var _this = this;
        return this.employeeService.findAll().subscribe(function (employees) {
            _this.employees = employees;
        }, function (err) {
            console.log(err);
            _this.appService.logout();
        });
    };
    AssignprojectComponent.prototype.updateProject = function (project) {
        var _this = this;
        if (project) {
            this.projectService.updateProject(project)
                .subscribe(function (res) {
                _this.router.navigate(['/dashboard/project']);
            }, function (err) {
                console.log(err);
                _this.appService.logout();
            });
        }
    };
    AssignprojectComponent.prototype.assignEmployeesToProject = function () {
        this.selectedProjectEmployees = [];
        this.selectedProjectEmployees = this.selection;
        if (this.selectedProjectEmployees !== undefined) {
            this.selectedProject.employees = this.selectedProjectEmployees;
            this.updateProject(this.selectedProject);
        }
    };
    AssignprojectComponent.prototype.changeProject = function () {
        var _this = this;
        if (this.selectedProject != null
            || this.selectedProject != undefined) {
            this.selection = [];
            this.selectedProject.employees.forEach(function (emp) {
                _this.employees.every(function (childEmp) {
                    if (emp.id == childEmp.id) {
                        _this.selection.push(childEmp);
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            });
        }
    };
    // toggle selection for a selected employee
    AssignprojectComponent.prototype.toggleSelection = function (employee) {
        var idx = this.selection.indexOf(employee);
        if (idx > -1) {
            this.selection.splice(idx, 1);
        }
        else {
            this.selection.push(employee);
        }
    };
    AssignprojectComponent.prototype.clear = function () {
        this.selection = [];
    };
    AssignprojectComponent.prototype.cancel = function () {
        this.selectedProject = null;
    };
    AssignprojectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-assignproject',
            template: __webpack_require__("../../../../../src/app/assignproject/assignproject.component.html"),
            styles: [__webpack_require__("../../../../../src/app/assignproject/assignproject.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__employee_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]])
    ], AssignprojectComponent);
    return AssignprojectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard-default/dashboard-default.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-default/dashboard-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<p>Welcome dude, You can select link from left panel to do any operation.</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard-default/dashboard-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardDefaultComponent = (function () {
    function DashboardDefaultComponent() {
    }
    DashboardDefaultComponent.prototype.ngOnInit = function () {
    };
    DashboardDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard-default',
            template: __webpack_require__("../../../../../src/app/dashboard-default/dashboard-default.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-default/dashboard-default.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardDefaultComponent);
    return DashboardDefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n\t<div class=\"w3-card-4\">\n\t\t<div class=\"w3-bar w3-light-grey\">\n\t\t\t<a class=\"w3-bar-item w3-button\" [routerLink]=\"['employee']\">Employee</a>\n\t\t\t<a class=\"w3-bar-item w3-button\" [routerLink]=\"['project']\">Project</a>\n\t\t\t<a class=\"w3-bar-item w3-button\" [routerLink]=\"['manageproject']\">Project Management</a>\n\t\t\t<div class=\"w3-dropdown-hover w3-right\">\n\t\t\t\t<button class=\"w3-button\"><i class=\"glyphicon glyphicon-user w3-large\"></i></button>\n\t\t\t\t<div class=\"w3-dropdown-content w3-bar-block w3-card-4\" style=\"right: 15px;\">\n\t\t\t\t\t<div class=\"w3-card-4 w3-padding\">\n\t\t\t\t\t\t<img src=\"../../assets/images/profile.JPG\" alt=\"Jane\" width=\"200px\" height=\"200px\" >\n\t\t\t\t\t\t<h2>{{activeUserName.name}}</h2>\n\t\t\t\t\t\t<p class=\"w3-text-grey\">{{activeUserName.username}}</p>\n\t\t\t\t\t\t<p class=\"w3-padding\">\n\t\t\t\t\t\t\t<a>Change password</a>\n\t\t\t\t\t\t\t<a class=\"w3-margin-left\" (click)=\"logoutUser()\">Logout</a>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"w3-row w3-padding w3-left-align\">\n\t\t\t<div style=\"height: 600px;\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(userService, appService) {
        this.userService = userService;
        this.appService = appService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeUserName = this.userService.fetchUserDetails().subscribe(function (data) {
            _this.activeUserName = data;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.logoutUser = function () {
        this.appService.logout();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row\">\n\t<div class=\"w3-col m12 l7 w3-padding\" *ngIf=\"employees && employees.length==0\">\n\t\t<p>You have not added any employee till now.</p>\n\t\t<p>You can &nbsp;<a (click)=\"addEmployeePage()\" title=\"Add\" class=\"w3-large\"><i class=\"glyphicon glyphicon-plus w3-text-green\"></i>Add</a>&nbsp; employee from here.</p>\n\t</div>\n\t<div class=\"w3-col m12 l7 w3-padding\" *ngIf=\"employees && employees.length>0\">\n\t\t<div class=\"w3-large\">\n\t\t\t<p>All Employees</p>\n\t\t</div>\n\t\t<div class=\"w3-responsive\">\n\t\t\t<table class=\"w3-table w3-striped w3-bordered w3-border w3-hoverable\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-row\">\n\t\t\t\t\t\t<th class=\"w3-col m3 l2\"><input class=\"w3-input w3-text-red\"\n\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"searchData.name\" placeholder=\"Name\"></th>\n\t\t\t\t\t\t<th class=\"w3-col m3 l3\"><input class=\"w3-input w3-text-red\"\n\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"searchData.email\" placeholder=\"Email\"></th>\n\t\t\t\t\t\t<th class=\"w3-col m4 l3\"><input class=\"w3-input w3-text-red\"\n\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"searchData.address\" placeholder=\"Address\"></th>\n\t\t\t\t\t\t<th class=\"w3-col m2 l2 w3-large w3-center\">\n\t\t\t\t\t\t\t<a (click)=\"addEmployeePage()\" title=\"Add\"><i class=\"glyphicon glyphicon-plus w3-text-green\"></i></a>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr class=\"w3-row\" *ngFor=\"let employee of employees | employeefilter : searchData\">\n\t\t\t\t\t\t<td class=\"w3-col m3 l2\">{{employee.name}}</td>\n\t\t\t\t\t\t<td class=\"w3-col m3 l3\">{{employee.email}}</td>\n\t\t\t\t\t\t<td class=\"w3-col m4 l3\">{{employee.address}}</td>\n\t\t\t\t\t\t<td class=\"w3-col m2 l2 w3-padding w3-small w3-center\">\n\t\t\t\t\t\t\t<a (click)=\"deleteEmployee(employee.id)\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash w3-text-red\"></i></a>&nbsp; &nbsp; \n\t\t\t\t\t\t\t<a (click)=\"editEmployeePage(employee)\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil w3-text-blue\"></i></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\n\t\t</div>\n\t</div>\n\t<div class=\"w3-col m12 l5 w3-padding\">\n\t\t<!-- Add employee -->\n\t\t<div class=\"w3-row\" *ngIf=\"addMode\">\t\t\t\t\n\t\t\t<div class=\"w3-col m6 l6\" *ngIf=\"submitted\">\n\t\t\t\t<h5>Employee added successfully!</h5>\n\t\t\t\t<div class=\"w3-row\">\n\t\t\t\t  <button class=\"w3-btn w3-blue\" (click)=\"goBack()\">Back</button>\n\t\t\t\t  <button class=\"w3-btn w3-green\" (click)=\"addEmployeePage()\">Add New</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"w3-col m6 l6\" *ngIf=\"!submitted\">\n\t\t\t\t<div class=\"w3-large\">\n\t\t\t\t\t<p>Add Employee</p>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"w3-form w3-border\" (ngSubmit)=\"saveEmployee()\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"text\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter name\" [(ngModel)]=\"employee.name\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"email\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter email\" [(ngModel)]=\"employee.email\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"text\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter address\" [(ngModel)]=\"employee.address\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"w3-row w3-margin-top\">\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<a (click)=\"cancel()\" class=\"w3-btn w3-red w3-block\">Cancel</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\tclass=\"w3-btn w3-orange w3-text-white w3-block\" (click)=\"clear()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"w3-btn w3-green w3-block\">Add</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!-- Update project -->\n\t\t<div class=\"w3-row\" *ngIf=\"updateMode\">\t\t\t\t\n\t\t\t<div class=\"w3-col m6 l6\" *ngIf=\"submitted\">\n\t\t\t\t<h5>Employee updated successfully!</h5>\n\t\t\t\t<div class=\"w3-row\">\n\t\t\t\t  <button class=\"w3-btn w3-blue\" (click)=\"goBack()\">Back</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"w3-col m6 l6\" *ngIf=\"!submitted\">\n\t\t\t\t<div class=\"w3-large\">\n\t\t\t\t\t<p>Update Employee</p>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"form w3-border\" (ngSubmit)=\"updateEmployee()\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"text\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter name\" [(ngModel)]=\"employee.name\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"email\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter email\" [(ngModel)]=\"employee.email\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"text\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter address\" [(ngModel)]=\"employee.address\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"w3-row w3-margin-top\">\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<a (click)=\"cancel()\" class=\"w3-btn w3-red w3-block\">Cancel</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\tclass=\"w3-btn w3-orange w3-text-white w3-block\" (click)=\"clear()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"w3-btn w3-green w3-block\">Update</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"deleteEmpModal\" class=\"w3-modal w3-card-4\">\n\t\t<div class=\"w3-modal-content w3-animate-zoom w3-card-4\">\n\t\t\t<header class=\"w3-container w3-blue w3-text-white\">\n\t\t\t\t<span\n\t\t\t\t\tclass=\"w3-button w3-display-topright w3-hover-red\">&times;</span>\n\t\t\t\t<h4>Delete Employee</h4>\n\t\t\t</header>\n\t\t\t<div class=\"w3-container\">\n\t\t\t\t<p>Are you really want to delete the employee?</p>\n\t\t\t</div>\n\t\t\t<ul class=\"w3-ul w3-border-top\">\n\t\t\t\t<li class=\"w3-right-align\">\n\t\t\t\t\t<button class=\"w3-button w3-grey\">Cancel</button>\n\t\t\t\t\t<button class=\"w3-button w3-red\">Yes</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee__ = __webpack_require__("../../../../../src/app/employee/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, appService, router) {
        this.employeeService = employeeService;
        this.appService = appService;
        this.router = router;
        this.employee = new __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* Employee */]();
        this.searchData = new __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* Employee */]();
        // this.activeUser=appService.getActiveUser();
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        console.log("Inside EmployeeComponent");
        this.getAllEmployees();
    };
    EmployeeComponent.prototype.getAllEmployees = function () {
        var _this = this;
        return this.employeeService.findAll().subscribe(function (employees) {
            _this.employees = employees;
        }, function (err) {
            console.log(err);
            _this.appService.logout();
        });
    };
    EmployeeComponent.prototype.addEmployeePage = function () {
        this.resetMode();
        this.employee = new __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* Employee */]();
        this.addMode = true;
    };
    EmployeeComponent.prototype.editEmployeePage = function (employee) {
        if (employee) {
            this.resetMode();
            this.updateMode = true;
            this.employee = JSON.parse(JSON.stringify(employee));
        }
    };
    EmployeeComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.employeeService.deleteEmployeeById(id)
            .subscribe(function (res) {
            _this.getAllEmployees();
        }, function (err) {
            console.log(err);
            _this.appService.logout();
        });
    };
    EmployeeComponent.prototype.detailEmployeePage = function (employee) {
        if (employee) {
            this.resetMode();
            this.detailMode = true;
            this.employee = JSON.parse(JSON.stringify(employee));
        }
    };
    EmployeeComponent.prototype.resetMode = function () {
        this.addMode = false;
        this.deleteMode = false;
        this.updateMode = false;
        this.submitted = false;
        this.detailMode = false;
    };
    EmployeeComponent.prototype.clear = function () {
        this.employee = new __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* Employee */]();
    };
    EmployeeComponent.prototype.cancel = function () {
        this.resetMode();
        this.employee = new __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* Employee */]();
    };
    EmployeeComponent.prototype.saveEmployee = function () {
        var _this = this;
        if (this.employee) {
            this.employeeService.saveEmployee(this.employee)
                .subscribe(function (res) {
                _this.submitted = true;
                _this.getAllEmployees();
            }, function (err) {
                console.log(err);
                _this.appService.logout();
            });
        }
    };
    EmployeeComponent.prototype.updateEmployee = function () {
        var _this = this;
        if (this.employee) {
            this.employeeService.updateEmployee(this.employee)
                .subscribe(function (res) {
                _this.submitted = true;
                _this.getAllEmployees();
            }, function (err) {
                console.log(err);
                _this.appService.logout();
            });
        }
    };
    EmployeeComponent.prototype.goBack = function () {
        this.resetMode();
        this.employee = new __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* Employee */]();
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("../../../../../src/app/employee/employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employee/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeService = (function () {
    function EmployeeService(http, appService) {
        this.http = http;
        this.appService = appService;
        this.apiUrl = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.appService.getToken() });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.apiUrl = appService.apiEndPoint() + "ems/employee";
    }
    EmployeeService.prototype.findAll = function () {
        return this.http.get(this.apiUrl, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    EmployeeService.prototype.findById = function (id) {
        return this.http.get(this.apiUrl + "/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        var body = JSON.stringify(employee);
        console.log("Inside saveEmployee in employee service : " + JSON.stringify(employee));
        return this.http
            .post(this.apiUrl, body, this.options)
            .map(function (res) { return res.status; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    EmployeeService.prototype.deleteEmployeeById = function (id) {
        return this.http.delete(this.apiUrl + "/" + id, this.options)
            .map(function (res) { return res.status; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        var body = JSON.stringify(employee);
        return this.http
            .put(this.apiUrl, body, this.options)
            .map(function (res) { return res.status; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/employee/employee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "../../../../../src/app/employee/employeefilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeefilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeefilterPipe = (function () {
    function EmployeefilterPipe() {
    }
    EmployeefilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Employee} employee The employee to compare to the filter.
     * @param {Employee} filter The filter to apply.
     * @return {boolean} True if employee satisfies filters, false if not.
     */
    EmployeefilterPipe.prototype.applyFilter = function (employee, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (employee[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (employee[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    EmployeefilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'employeefilter',
            pure: false
        })
    ], EmployeefilterPipe);
    return EmployeefilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-blue w3-card-4 w3-padding w3-block\" style=\"position:fixed; bottom:0px;\">\n\t<div class=\"w3-row w3-center\">\n\t\t<p>Copyright &#169; 2020 All Rights Reserved.</p>\n\t\t<!-- <p class=\"w3-opacity\">Design & Develop by Shyam Ji</p> -->\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gaurd/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, appService) {
        this.router = router;
        this.appService = appService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log("Inside auth gaurd");
        if (this.appService.checkCredentials()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container-fluid\">\n\t<div class=\"w3-row w3-center w3-blue w3-text-white\">\n\t\t<h4>\n\t\t\t<b>EMS</b>\n\t\t</h4>\n\t\t<p>Welcome to Employee Management System</p>\n\t</div>\n\t<div class=\"w3-bar w3-white\">\n\t\t<div class=\"w3-col m6 l6 w3-bar-item w3-left-align\">\n\t\t\t{{today | date:'medium'}}\n\t\t</div>\n\t\t<div class=\"w3-col m6 l6 w3-bar-item w3-right-align\">\n\t\t\t<p *ngIf=\"isUserLoggedIn(); then temp1 else temp2\"></p>\n\t\t</div>\n\t</div>\n</div>\n<ng-template #temp1>\n\t<a class=\"w3-button w3-text-blue\" [routerLink]=\"['/dashboard']\"> Home</a>\n</ng-template>\n<ng-template #temp2>\n\t<a class=\"w3-button w3-text-blue\" [routerLink]=\"['/login']\">Login</a> &nbsp; <a class=\"w3-button w3-text-blue\" [routerLink]=\"['/signup']\">Signup</a>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(appService) {
        this.appService = appService;
        this.today = Date.now();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.today = Date.now();
        }, 1000);
    };
    HeaderComponent.prototype.isUserLoggedIn = function () {
        return this.appService.checkCredentials();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-display-container\" style=\"height:600px;\"> \n\t<div class=\"w3-display-middle\">\n\t\t<form (submit)=\"signin()\" #signinForm=\"ngForm\" class=\"w3-card-4 w3-white w3-text-blue w3-padding\" style=\"min-width:500px;\">\n\t\t\t<h3 class=\"w3-center\">Login</h3>\n\t\t\t<div *ngIf=\" message != '' \" class=\"w3-row w3-section\" style=\"color:red; text-align:left;\">{{message}}</div>\n\t\t\t<div class=\"w3-row w3-section\">\n\t\t\t\t<div class=\"w3-col\">\n\t\t\t\t\t<i class=\"w3-xxlarge fa fa-envelope-o\"></i>\n\t\t\t\t</div>\n\t\t\t\t<label id=\"email\">Email</label>\n\t\t\t\t<div class=\"w3-rest\">\n\t\t\t\t\t<input class=\"w3-input w3-border\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" id=\"email\" type=\"email\" placeholder=\"Email\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"w3-text-red\">\n\t\t\t\t\t<div *ngIf=\"email.errors.required\">\n\t\t\t\t\t\tEmail is required.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"email.hasError('pattern')\">\n\t\t\t\t\t\tEmail must be in standard format (abc@gmail.com)\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"w3-row w3-section\">\n\t\t\t\t<div class=\"w3-col\">\n\t\t\t\t\t<i class=\"w3-xxlarge fa fa-password\"></i>\n\t\t\t\t</div>\n\t\t\t\t<label id=\"pwd\">Password</label>\n\t\t\t\t<div class=\"w3-rest\">\n\t\t\t\t\t<input class=\"w3-input w3-border\" [(ngModel)]=\"user.password\" #pwd=\"ngModel\"  minlength=\"6\" required maxlength=\"20\" name=\"pwd\" id=\"pwd\" type=\"password\" placeholder=\"Password\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"pwd.invalid && (pwd.dirty || pwd.touched)\" class=\"w3-text-red\">\n\t\t\t\t\t<div *ngIf=\"pwd.errors.required\">\n\t\t\t\t\t\tPassword is required.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"pwd.errors.minlength\">\n\t\t\t\t\t\tPassword must be 6 characters long.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"pwd.errors.maxlength\">\n\t\t\t\t\t\tPassword cannot be more than 20 characters long.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t<button\n\t\t\t\tclass=\"w3-button w3-block w3-section w3-blue w3-ripple w3-padding\" type=\"submit\" [disabled]=\"signinForm.form.invalid\" >Login</button>\n\t\t\t\t<div class=\"w3-row w3-center\">\n\t\t\t\t\t<div class=\"w3-col m12 l12\"><a routerLink=\"/signup\">Signup</a> &nbsp; &nbsp; <a routerLink=\"forgotpassword\">Forgot password?</a></div>\n\t\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.message = "";
        console.log("Inside Login Controller");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* User */]();
        if (this.appService.checkCredentials()) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.signin = function () {
        var _this = this;
        if (this.user) {
            this.appService.obtainAccessToken(this.user);
            setTimeout(function () {
                _this.message = "Invalid email or password.";
            }, 500);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notfound404/notfound404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notfound404/notfound404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound404 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/notfound404/notfound404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notfound404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Notfound404Component = (function () {
    function Notfound404Component() {
    }
    Notfound404Component.prototype.ngOnInit = function () {
    };
    Notfound404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notfound404',
            template: __webpack_require__("../../../../../src/app/notfound404/notfound404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notfound404/notfound404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Notfound404Component);
    return Notfound404Component;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row\">\n\t<div class=\"w3-col m12 l7 w3-padding\" *ngIf=\"projects && projects.length==0\">\n\t\t<p>You have not added any project till now.</p>\n\t\t<p>You can &nbsp;<a (click)=\"addProjectPage()\" title=\"Add\" class=\"w3-large\"><i class=\"glyphicon glyphicon-plus w3-text-green\"></i>Add</a>&nbsp; project from here.</p>\n\t</div>\n\t<div class=\"w3-col m12 l7 w3-padding\" *ngIf=\"projects && projects.length>0\">\n\t\t<div class=\"w3-large\">\n\t\t\t<p>All Projects</p>\n\t\t</div>\n\t\t<div class=\"w3-responsive\">\n\t\t\t<table class=\"w3-table w3-striped w3-bordered w3-border w3-hoverable\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-row\">\n\t\t\t\t\t\t<th class=\"w3-col m4 l4\"><input class=\"w3-input w3-text-red\"\n\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"searchData.name\" placeholder=\"Name\"></th>\n\t\t\t\t\t\t<th class=\"w3-col m5 l5\"><input class=\"w3-input w3-text-red\"\n\t\t\t\t\t\t\ttype=\"text\" [(ngModel)]=\"searchData.description\" placeholder=\"Description\"></th>\n\t\t\t\t\t\t<th class=\"w3-col m2 l2 w3-large w3-center\">\n\t\t\t\t\t\t\t<a (click)=\"addProjectPage()\" title=\"Add\"><i class=\"glyphicon glyphicon-plus w3-text-green\"></i></a>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr class=\"w3-row\" *ngFor=\"let project of projects | projectfilter : searchData\">\n\t\t\t\t\t\t<td class=\"w3-col m4 l4\" scope=\"row\">{{project.name}}</td>\n\t\t\t\t\t\t<td class=\"w3-col m5 l5\">{{project.description}}</td>\n\t\t\t\t\t\t<td class=\"w3-col m2 l2 w3-padding w3-small w3-center\">\n\t\t\t\t\t\t\t<a (click)=\"deleteProject(project.id)\" title=\"Delete\"><i class=\"glyphicon glyphicon-trash w3-text-red\"></i></a>&nbsp; &nbsp; \n\t\t\t\t\t\t\t<a (click)=\"editProjectPage(project)\" title=\"Edit\"><i class=\"glyphicon glyphicon-pencil w3-text-blue\"></i></a>&nbsp; &nbsp; \n\t\t\t\t\t\t\t<a (click)=\"detailProjectPage(project)\" title=\"Detail\"><i class=\"glyphicon glyphicon-th w3-text-green\"></i></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t<div class=\"w3-col m12 l5 w3-padding\">\n\t\n\t\t<!-- Add project -->\n\t\t<div class=\"w3-row\" *ngIf=\"addMode\">\t\t\t\t\n\t\t\t<div class=\"w3-col m6 l6\" *ngIf=\"submitted\">\n\t\t\t\t<h5>Project added successfully!</h5>\n\t\t\t\t<div class=\"w3-row\">\n\t\t\t\t  <button class=\"w3-btn w3-blue\" (click)=\"goBack()\">Back</button>\n\t\t\t\t  <button class=\"w3-btn w3-green\" (click)=\"addProjectPage()\">Add New</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"w3-col m6 l6\" *ngIf=\"!submitted\">\n\t\t\t\t<div class=\"w3-large\">\n\t\t\t\t\t<p>Add Project</p>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"form w3-border\" (ngSubmit)=\"saveProject()\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"text\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter project name\" [(ngModel)]=\"project.name\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"text\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter description\" [(ngModel)]=\"project.description\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<div class=\"w3-row w3-margin-top\">\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<a (click)=\"cancel()\" class=\"w3-btn w3-red w3-block\">Cancel</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\tclass=\"w3-btn w3-orange w3-text-white w3-block\" (click)=\"clear()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"w3-btn w3-green w3-block\">Add</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!-- Update project -->\n\t\t<div class=\"w3-row\" *ngIf=\"updateMode\">\t\t\t\t\n\t\t\t<div class=\"w3-col m6 l6\" *ngIf=\"submitted\">\n\t\t\t\t<h5>Project updated successfully!</h5>\n\t\t\t\t<div class=\"w3-row\">\n\t\t\t\t  <button class=\"w3-btn w3-blue\" (click)=\"goBack()\">Back</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"w3-col m6 l6\" *ngIf=\"!submitted\">\n\t\t\t\t<div class=\"w3-large\">\n\t\t\t\t\t<p>Update Project</p>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"form w3-border\" (ngSubmit)=\"updateProject()\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"text\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter project name\" [(ngModel)]=\"project.name\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"text\" class=\"w3-input\" required\n\t\t\t\t\t\t\tplaceholder=\"Enter description\" [(ngModel)]=\"project.description\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<div class=\"w3-row w3-margin-top\">\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<a (click)=\"cancel()\" class=\"w3-btn w3-red w3-block\">Cancel</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\tclass=\"w3-btn w3-orange w3-text-white w3-block\" (click)=\"clear()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"w3-col m4 l4\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"w3-btn w3-green w3-block\">Update</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!-- Project detail -->\n\t\t<div class=\"w3-row\" *ngIf=\"detailMode\">\t\t\n\t\t\t<div class=\"w3-col m12 l12\">\n\t\t\t\t<article>\n\t\t\t\t  <h1>{{project.name}}</h1>\n\t\t\t\t  <p>{{project.description}}</p>\n\t\t\t\t</article>\n\t\t\t\t<div class=\"w3-responsive\" *ngIf=\"project.employees.length > 0\">\n\t\t\t\t\t<p class=\"w3-large\">Employees</p>\n\t\t\t\t\t<table class=\"w3-table w3-striped w3-bordered w3-border w3-hoverable\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"w3-row\">\n\t\t\t\t\t\t\t\t<th class=\"w3-col m4 l4\">Name</th>\n\t\t\t\t\t\t\t\t<th class=\"w3-col m4 l4\">Email</th>\n\t\t\t\t\t\t\t\t<th class=\"w3-col m4 l4\">Address</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"w3-row\" *ngFor=\"let employee of project.employees\">\n\t\t\t\t\t\t\t\t<td class=\"w3-col l4\">{{employee.name}}</td>\n\t\t\t\t\t\t\t\t<td class=\"w3-col l4\">{{employee.email}}</td>\n\t\t\t\t\t\t\t\t<td class=\"w3-col l4\">{{employee.address}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Delete project modal -->\n\t<div id=\"deleteProjectModal\" class=\"w3-modal w3-card-4\">\n\t\t<div class=\"w3-modal-content w3-animate-zoom w3-card-4\">\n\t\t\t<header class=\"w3-container w3-blue w3-text-white\">\n\t\t\t\t<span class=\"w3-button w3-display-topright w3-hover-red\">&times;</span>\n\t\t\t\t<h4>Delete Project</h4>\n\t\t\t</header>\n\t\t\t<div class=\"w3-container\">\n\t\t\t\t<p>Are you really want to delete the project?</p>\n\t\t\t</div>\n\t\t\t<ul class=\"w3-ul w3-border-top\">\n\t\t\t\t<li class=\"w3-right-align\">\n\t\t\t\t\t<button class=\"w3-button w3-grey\">Cancel</button>\n\t\t\t\t\t<button class=\"w3-button w3-red\">Yes</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__("../../../../../src/app/project/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = (function () {
    function ProjectComponent(projectService, appService, router) {
        this.projectService = projectService;
        this.appService = appService;
        this.router = router;
        this.project = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
        this.searchData = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
        // this.activeUser=appService.getActiveUser();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        console.log("Inside ProjectComponent");
        this.getAllProjects();
    };
    ProjectComponent.prototype.getAllProjects = function () {
        var _this = this;
        return this.projectService.findAll().subscribe(function (projects) {
            _this.projects = projects;
        }, function (err) {
            console.log(err);
            _this.appService.logout();
        });
    };
    ProjectComponent.prototype.addProjectPage = function () {
        this.resetMode();
        this.project = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
        this.addMode = true;
    };
    ProjectComponent.prototype.editProjectPage = function (project) {
        if (project) {
            this.resetMode();
            this.updateMode = true;
            this.project = JSON.parse(JSON.stringify(project));
        }
    };
    ProjectComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.projectService.deleteProjectById(id)
            .subscribe(function (res) {
            _this.getAllProjects();
        }, function (err) {
            console.log(err);
            _this.appService.logout();
        });
    };
    ProjectComponent.prototype.detailProjectPage = function (project) {
        if (project) {
            this.resetMode();
            this.detailMode = true;
            this.project = JSON.parse(JSON.stringify(project));
        }
    };
    ProjectComponent.prototype.resetMode = function () {
        this.addMode = false;
        this.deleteMode = false;
        this.updateMode = false;
        this.submitted = false;
        this.detailMode = false;
    };
    ProjectComponent.prototype.clear = function () {
        this.project = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
    };
    ProjectComponent.prototype.cancel = function () {
        this.resetMode();
        this.project = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
    };
    ProjectComponent.prototype.saveProject = function () {
        var _this = this;
        if (this.project) {
            this.projectService.saveProject(this.project)
                .subscribe(function (res) {
                _this.submitted = true;
                _this.getAllProjects();
            }, function (err) {
                console.log(err);
                _this.appService.logout();
            });
        }
    };
    ProjectComponent.prototype.updateProject = function () {
        var _this = this;
        if (this.project) {
            this.projectService.updateProject(this.project)
                .subscribe(function (res) {
                _this.submitted = true;
                _this.getAllProjects();
            }, function (err) {
                console.log(err);
                _this.appService.logout();
            });
        }
    };
    ProjectComponent.prototype.goBack = function () {
        this.resetMode();
        this.project = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectService = (function () {
    function ProjectService(http, appService) {
        this.http = http;
        this.appService = appService;
        this.apiUrl = "";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.appService.getToken() });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.apiUrl = appService.apiEndPoint() + "ems/project";
    }
    ProjectService.prototype.findAll = function () {
        return this.http.get(this.apiUrl, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProjectService.prototype.findById = function (id) {
        return this.http.get(this.apiUrl + "/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProjectService.prototype.saveProject = function (project) {
        var body = JSON.stringify(project);
        return this.http.post(this.apiUrl, body, this.options)
            .map(function (res) { return res.status; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProjectService.prototype.deleteProjectById = function (id) {
        return this.http.delete(this.apiUrl + "/" + id, this.options)
            .map(function (res) { return res.status; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProjectService.prototype.updateProject = function (project) {
        var body = JSON.stringify(project);
        console.log("Inside update project " + project);
        return this.http
            .put(this.apiUrl, body, this.options)
            .map(function (res) { return res.status; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "../../../../../src/app/project/projectfilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectFilterPipe = (function () {
    function ProjectFilterPipe() {
    }
    ProjectFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Project} project The project to compare to the filter.
     * @param {Project} filter The filter to apply.
     * @return {boolean} True if project satisfies filters, false if not.
     */
    ProjectFilterPipe.prototype.applyFilter = function (project, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (project[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (project[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    ProjectFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'projectfilter',
            pure: false
        })
    ], ProjectFilterPipe);
    return ProjectFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-display-container\" style=\"height:600px;\"> \n\t<div class=\"w3-display-middle\">\n\t\t<div class=\"w3-panel w3-green w3-card-4 w3-padding w3-center\" *ngIf=\"message != '' \" style=\"width:500px;\" >\n\t\t\t<p class=\"w3-xlarge\">{{message}}</p> \n\t\t\t<p><a class=\"w3-text-white\" routerLink=\"/login\">Login</a></p>\n\t\t</div>\n\t\t<form (submit)=\"signup()\" #signupForm=\"ngForm\" class=\"w3-card-4 w3-white w3-text-blue w3-padding\" style=\"min-width:500px;\" *ngIf=\" message == '' \">\n\t\t\t<h2 class=\"w3-center\">Signup</h2>\n\t\t\t<div *ngIf=\" errmessage != '' \" class=\"w3-row w3-section\" style=\"color:red; text-align:left;\">{{errmessage}}</div>\n\t\t\t\n\t\t\t<div class=\"w3-row w3-section\">\n\t\t\t\t<div class=\"w3-col\" style=\"width: 50px\">\n\t\t\t\t\t<i class=\"w3-xxlarge fa fa-user\"></i>\n\t\t\t\t</div>\n\t\t\t\t<label id=\"first\"><span class=\"w3-text-red\">* </span>First Name</label>\n\t\t\t\t<div class=\"w3-rest\">\n\t\t\t\t\t<input class=\"w3-input w3-border w3-text-gray\" id=\"first\" required  [(ngModel)]=\"user.firstName\" name=\"first\" type=\"text\"\n\t\t\t\t\t\tplaceholder=\"First Name\" #firstName=\"ngModel\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\" class=\"w3-text-red\">\n\t\t\t\t\t<div *ngIf=\"firstName.errors.required\">\n\t\t\t\t\t\tFirst name is required.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"w3-row w3-section\">\n\t\t\t\t<div class=\"w3-col\" style=\"width: 50px\">\n\t\t\t\t\t<i class=\"w3-xxlarge fa fa-user\"></i>\n\t\t\t\t</div>\n\t\t\t\t<label id=\"last\">Last Name</label>\n\t\t\t\t<div class=\"w3-rest\">\n\t\t\t\t\t<input class=\"w3-input w3-border w3-text-gray\" [(ngModel)]=\"user.lastName\" id=\"last\" name=\"last\" type=\"text\"\n\t\t\t\t\t\tplaceholder=\"Last Name\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"w3-row w3-section\">\n\t\t\t\t<div class=\"w3-col\" style=\"width: 50px\">\n\t\t\t\t\t<i class=\"w3-xxlarge fa fa-envelope-o\"></i>\n\t\t\t\t</div>\n\t\t\t\t<label id=\"email\"><span class=\"w3-text-red\">* </span>Email</label>\n\t\t\t\t<div class=\"w3-rest\">\n\t\t\t\t\t<input class=\"w3-input w3-border w3-text-gray\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [(ngModel)]=\"user.email\" #email=\"ngModel\" name=\"email\" type=\"email\" placeholder=\"Email\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"w3-text-red\">\n\t\t\t\t\t<div *ngIf=\"email.errors.required\">\n\t\t\t\t\t\tEmail is required.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"email.hasError('pattern')\">\n\t\t\t\t\t\tEmail must be in standard format (abc@gmail.com)\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"w3-row w3-section\">\n\t\t\t\t<div class=\"w3-col\" style=\"width: 50px\">\n\t\t\t\t\t<i class=\"w3-xxlarge fa fa-envelope-o\"></i>\n\t\t\t\t</div>\n\t\t\t\t<label id=\"pwd\"><span class=\"w3-text-red\">* </span>Password</label>\n\t\t\t\t<div class=\"w3-rest\">\n\t\t\t\t\t<input class=\"w3-input w3-border w3-text-gray\" id=\"password\" required minlength=\"6\" maxlength=\"20\" [(ngModel)]=\"user.password\" #pwd=\"ngModel\" name=\"password\" type=\"password\" placeholder=\"Password\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"pwd.invalid && (pwd.dirty || pwd.touched)\" class=\"w3-text-red\">\n\t\t\t\t\t<div *ngIf=\"pwd.errors.required\">\n\t\t\t\t\t\tPassword is required.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"pwd.errors.minlength\">\n\t\t\t\t\t\tPassword must be 6 characters long.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"pwd.errors.maxlength\">\n\t\t\t\t\t\tPassword cannot be more than 20 characters long.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\n\t\t\t<div class=\"w3-row w3-section\">\n\t\t\t\t<div class=\"w3-col\" style=\"width: 50px\">\n\t\t\t\t\t<i class=\"w3-xxlarge fa fa-phone\"></i>\n\t\t\t\t</div>\n\t\t\t\t<label id=\"phone\"><span class=\"w3-text-red\">* </span>Phone</label>\n\t\t\t\t<div class=\"w3-rest\">\n\t\t\t\t\t<input class=\"w3-input w3-border w3-text-gray\" required minlength=\"2\" maxlength=\"10\" pattern=\"^[0-9()\\-+\\s]+$\" [(ngModel)]=\"user.phone\" #phone=\"ngModel\" id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" >\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" class=\"w3-text-red\">\n\t\t\t\t\t<div *ngIf=\"phone.errors.minlength\">\n\t\t\t\t\t\tPhone must be at least 2 characters long.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"phone.errors.maxlength\">\n\t\t\t\t\t\tPhone cannot be more than 10 digits.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"phone.hasError('pattern')\">\n\t\t\t\t\t\tPhone must be contains only digits.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\n\t\t\t<div class=\"w3-row w3-section\">\n\t\t\t\t<div class=\"w3-col\" style=\"width: 50px\">\n\t\t\t\t\t<i class=\"w3-xxlarge fa fa-pencil\"></i>\n\t\t\t\t</div>\n\t\t\t\t<label id=\"address\">Address</label>\n\t\t\t\t<div class=\"w3-rest\">\n\t\t\t\t\t<input class=\"w3-input w3-border w3-text-gray\" [(ngModel)]=\"user.address\" id=\"address\" name=\"address\" type=\"textarea\"\n\t\t\t\t\t\tplaceholder=\"Address\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<button type=\"submit\"\n\t\t\t\tclass=\"w3-button w3-block w3-section w3-green w3-ripple w3-padding\" [disabled]=\"signupForm.form.invalid\" >Create Account</button>\n\t\t\t<div class=\"w3-row w3-center\">\n\t\t\t\t<div class=\"w3-col m12 l12\"><a routerLink=\"/login\">Signin</a></div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.submitted = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.resetMode();
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (this.user) {
            this.userService.saveUser(this.user)
                .subscribe(function (res) {
                _this.message = "You have been successfully created account.";
                _this.user = new __WEBPACK_IMPORTED_MODULE_1__user_user__["a" /* User */]();
                _this.submitted = true;
            }, function (err) {
                console.log(err);
                _this.errmessage = "Another person is already registerd with this email id.";
            });
        }
    };
    SignupComponent.prototype.resetMode = function () {
        this.submitted = false;
        this.message = "";
        this.errmessage = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user_user__["a" /* User */]();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http, appService) {
        this.http = http;
        this.appService = appService;
        this.apiUrl = "";
        console.log("Inside UserService Constructor");
        this.apiUrl = appService.apiEndPoint();
    }
    UserService.prototype.saveUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiUrl + 'signup', body, options)
            .map(function (res) { return res.status; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.fetchUserDetails = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.appService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.apiUrl + 'ems/user/activeUser', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map