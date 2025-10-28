import { Component } from '@angular/core';
import { Sidebar } from "../../components/sidebar/sidebar";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-layout',
  imports: [Sidebar, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
