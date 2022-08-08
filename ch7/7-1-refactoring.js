class Organization {
  #data;
  #name;
  #country;

  // 서버 통신 => 오브젝트로 받음 => data
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  //   constructor(name, country) {
  //     this.#name = name;
  //     this.#country = country;
  //   }

  get rawData() {
    return { name: this.name, country: this.country };
    // set name(name)이 없을 경우
    // return { ...this.#data }; => 얕은 복사 => lodash -> cloneDeep
  }
  get name() {
    return this.#name;
  }
  get country() {
    return this.#country;
  }

  set name(name) {
    this.#name = name;
  }
}

const organization = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
});

// const organization = new Organization('Acme Gooseberries', 'GB');

console.log(organization.country);
