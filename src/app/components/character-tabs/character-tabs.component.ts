import { Component, Input, OnInit } from '@angular/core';

export interface CharacterTab {
  link: string;
  label: string;
}

@Component({
  selector: 'moe-character-tabs',
  templateUrl: './character-tabs.component.html',
  styleUrls: ['./character-tabs.component.scss'],
})
export class CharacterTabsComponent implements OnInit {
  @Input() characterId!: string;

  tabs: Array<CharacterTab> = [];

  ngOnInit() {
    this.tabs = [
      this.formatOverviewTab(),
      this.formatTalentsTab(),
      this.formatConstellationsTab(),
    ];
  }

  private formatOverviewTab() {
    return {
      label: 'Builds',
      link: `/characters/${this.characterId}/overview`,
    };
  }

  private formatTalentsTab() {
    return {
      label: 'Talents',
      link: `/characters/${this.characterId}/talents`,
    };
  }

  private formatConstellationsTab() {
    return {
      label: 'Constellations',
      link: `/characters/${this.characterId}/constellations`,
    };
  }
}
