import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { BackToTop } from './shared/ui/back-to-top/back-to-top';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, Footer, BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
