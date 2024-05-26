import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}