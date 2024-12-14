import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  template: ` <main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="assets/logo.png"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <app-home />
    </section>
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  </main>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'default';
}
