import {Component} from '@angular/core';



@Component ({
    selector:'edu-app',
    template:`<div> 
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand">Shoping List</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                   
                        <li><a [routerLink]="['/home']">Home</a></li>
                        <li><a [routerLink]="['/products']">Products</a></li>
                        <li><a [routerLink]="['/orders']">Orders</a></li>
                        <li><a [routerLink]="['/forms']">Forms</a></li>
                        
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
                </div>
        </nav> 
            
        <div class="container">
        <router-outlet></router-outlet>
    </div>
            
    </div>`
})


export class AppComponent{

}

