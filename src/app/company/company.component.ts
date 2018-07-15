import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from './team.service';

@Component({
  selector: 'tcc-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public teams: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {

    const team: Team = new Team(null,null,null,null,null,null);

    this.teamService.teams().subscribe(
      data => { data.forEach((id, country, alternate_name, fifa_code, group_id, group_letter) => {
        team.id = id;
        team.country = country;
        team.alternateName = alternate_name;
        team.fifa_code = fifa_code;
        team.groupid = group_id;
        team.groupletter = group_letter;
        this.teams.push(team);
      });
      console.log(data);
    },
      err => console.error(err),
      () => console.log('done loading teams')
    );
  }
}
