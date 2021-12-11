import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImgUploaderComponent } from './img-uploader/img-uploader.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload', component: ImgUploaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
