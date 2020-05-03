import React, { Component } from "react";
import MyForm from "./myForm";

export default class calculator extends Component {
  constructor() {
    super();
    this.calculateResult = this.calculateResult.bind(this);
    this.getageRatio = this.getAgeRatio.bind(this);
    this.getSumOfAgeRatios = this.getSumOfAgeRatios.bind(this);
  }

  render() {
    return (
      <div className="calculator muted">
        <MyForm calculateResult={this.calculateResult}></MyForm>
      </div>
    );
  }

  calculateResult(userAge, userGender, userDiseases) {
    let userAgeGroup = this.getAgeGroup(userAge);

    let dssDthOutOfTtlDthMltplctn = 1;
    for (let disease of userDiseases) {
      dssDthOutOfTtlDthMltplctn *= this.dssDthOutOfTtlDthMap[disease];
    }

    let dthPrcntRskGrpOfTtlDth =
      this.ageDthOutOfTtlDthMap[userAgeGroup] *
      this.sexDthOutOfTtlDthMap[userGender] *
      dssDthOutOfTtlDthMltplctn;

    let dssPpltnMltplctn = 1;
    for (let disease of userDiseases) {
      dssPpltnMltplctn *= this.dssPpltnMap[disease];
    }

    let infectedInRskGrpPrcnt =
      this.agePpltnMap[userAgeGroup] * 0.5 * dssPpltnMltplctn;

    let result =
      (dthPrcntRskGrpOfTtlDth * this.ttlDths) /
      (infectedInRskGrpPrcnt * this.ttlInfctd);

    let resultInPercent = result * 100;
    localStorage.setItem("resultInPercent", resultInPercent.toFixed(2));
  }

  ttlDths = 13684;
  // ttlDths = 280000000;

  ttlInfctd = 318953;
  // ttlInfctd = 7000000000;

  // Age

  ageGroups = [
    "<9",
    "10<19",
    "20<29",
    "30<39",
    "40<49",
    "50<59",
    "60<69",
    "70<79",
    "80<"
  ];

  getAgeGroup(age) {
    if (age < 10) return "<9";
    if (age < 20) return "10<19";
    if (age < 30) return "20<29";
    if (age < 40) return "30<39";
    if (age < 50) return "40<49";
    if (age < 60) return "50<59";
    if (age < 70) return "60<69";
    if (age < 80) return "70<79";
    if (80 <= age) return "80<";
  }

  // Age Population Map
  agePpltnMap = {
    "<9": 0.11,
    "10<19": 0.13,
    "20<29": 0.15,
    "30<39": 0.14,
    "40<49": 0.12,
    "50<59": 0.15,
    "60<69": 0.1,
    "70<79": 0.06,
    "80<": 0.04
  };

  // Age Death Rate Map (total deaths out of the infected for that age-group)
  ageDthRtMap = {
    "<9": 0,
    "10<19": 0.002,
    "20<29": 0.002,
    "30<39": 0.002,
    "40<49": 0.004,
    "50<59": 0.013,
    "60<69": 0.036,
    "70<79": 0.08,
    "80<": 0.148
  };

  // This function calculates the ratio of the death rate for that age-group to the total population
  getAgeRatio(ageGroup) {
    return this.agePpltnMap[ageGroup] * this.ageDthRtMap[ageGroup];
  }

  // This function calculates the sum of age ratios (function above)
  getSumOfAgeRatios() {
    let sum = 0;
    for (let ageGroup of this.ageGroups) {
      sum += this.getAgeRatio(ageGroup);
    }
    return sum;
  }

  sumOfAgeRatios = this.getSumOfAgeRatios();

  // Deaths out of total deaths (all ages) divided into age groups
  ageDthOutOfTtlDthMap = {
    "<9": this.getAgeRatio("<9") / this.sumOfAgeRatios,
    "10<19": this.getAgeRatio("10<19") / this.sumOfAgeRatios,
    "20<29": this.getAgeRatio("20<29") / this.sumOfAgeRatios,
    "30<39": this.getAgeRatio("30<39") / this.sumOfAgeRatios,
    "40<49": this.getAgeRatio("40<49") / this.sumOfAgeRatios,
    "50<59": this.getAgeRatio("50<59") / this.sumOfAgeRatios,
    "60<69": this.getAgeRatio("60<69") / this.sumOfAgeRatios,
    "70<79": this.getAgeRatio("70<79") / this.sumOfAgeRatios,
    "80<": this.getAgeRatio("80<") / this.sumOfAgeRatios
  };

  // Sex

  // Sex Death Rate Map (total deaths out of the infected for that sex)
  sexDthRtMap = {
    male: 0.047,
    female: 0.028
  };

  // Sum of the two variables above
  sumOfSexDthRt = this.sexDthRtMap.male + this.sexDthRtMap.female;

  // Deaths out of total deaths (all genders) divided into genders
  sexDthOutOfTtlDthMap = {
    male: this.sexDthRtMap.male / this.sumOfSexDthRt,
    female: this.sexDthRtMap.female / this.sumOfSexDthRt
  };

  // Diseases

  diseases = ["crdio", "diabetes", "rsptry", "tension", "cancer", "none"];

  // Disease Population Map
  dssPpltnMap = {
    crdio: 0.14,
    diabetes: 0.053,
    rsptry: 0.049,
    tension: 0.29,
    cancer: 0.024,
    none: 0.444
  };

  // Disease Death Rate Map (total deaths out of the infected for that disease)
  dssDthRtMap = {
    crdio: 0.105,
    diabetes: 0.073,
    rsptry: 0.063,
    tension: 0.06,
    cancer: 0.056,
    none: 0.009
  };

  // This function calculates the ratio of the death rate for that disease-group to the total population.
  getDssRatio(disease) {
    return this.dssPpltnMap[disease] * this.dssDthRtMap[disease];
  }

  // This function calculates the sum of disease ratios (function above)
  getSumOfDssRatios() {
    let sum = 0;
    for (let disease of this.diseases) {
      sum += this.getDssRatio(disease);
    }
    return sum;
  }

  sumOfDssRatios = this.getSumOfDssRatios();

  // Deaths out of total deaths (all diseases) divided into disease groups
  dssDthOutOfTtlDthMap = {
    crdio: this.getDssRatio("crdio") / this.sumOfDssRatios,
    diabetes: this.getDssRatio("diabetes") / this.sumOfDssRatios,
    rsptry: this.getDssRatio("rsptry") / this.sumOfDssRatios,
    tension: this.getDssRatio("tension") / this.sumOfDssRatios,
    cancer: this.getDssRatio("cancer") / this.sumOfDssRatios,
    none: this.getDssRatio("none") / this.sumOfDssRatios
  };
}
