import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { CountryService } from "./countryservice";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [CountryService]
})
export class AppComponent {
  selectedCities: string[] = [];

  selectedCountries1: string[] = [];

  selectedCountries2: string[] = [];

  items: SelectItem[];

  item: string;

  cities: any[];

  countries: any[];
groups: { name: string; code: string; }[];
departments: { name: string; code: string; }[];

  constructor(
    private countryService: CountryService,
    private primengConfig: PrimeNGConfig
  ) {
    this.items = [];

    this.countryService.getCountries().then(countries => {
      this.items = countries;
    });

    this.countries = [
      { name: "Seçili lisanların tamamını içeren(allOf)", code: "AU" },
      { name: "Seçili lisanların herhangi birini içeren(anyOf)", code: "BR" },

    ];

    this.groups = [
      { name: "Tüm Userları Lisanla", code: "AU" },
      { name: "Belirli bir grubun Userlarını Lisanla", code: "BR" },

    ];

    this.cities = [
      { name: "velocity", code: "NY" },
      { name: "signandgo", code: "RM" },
      { name: "noa", code: "LDN" },
      { name: "passgate", code: "IST" },
    ];
    this.departments = [
      { name: "Support Team", code: "NY" },
      { name: "HR Team", code: "RM" },
      { name: "Talent & Culture Team", code: "LDN" },
      { name: "Developers", code: "IST" },
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
