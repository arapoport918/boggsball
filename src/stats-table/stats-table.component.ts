import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-table.component.html',
  styleUrl: './stats-table.component.scss'
})
export class StatsTableComponent {
  headers: string[] = [
    'Name', 'Year', 'Team', 'Position', 'BA', 'RBI', 'OBP', 'SLG', 'OPS', 'RC', 'ISO', 'wOBA', 'wRC+', 'OPS+', 'BsR'
  ];
}
