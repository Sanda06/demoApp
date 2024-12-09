import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { AreaComponent } from './module1/area/area.component';
// import { ThingComponent } from './module1/thing/thing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:false
})
export class AppComponent {
  private router = inject(Router);
  private route= inject(ActivatedRoute);

  title = 'demoApp';

  public goTo(path: string){
    void this.router.navigate([`../${path}`], {relativeTo: this.route});
  }
}
