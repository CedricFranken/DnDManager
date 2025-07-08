export abstract class RaceClass {

   private readonly _abilityScoreIncrease: number;
   private readonly _name: string;
   private readonly _speed: number;
   private readonly _size: string;
   private readonly _languages: string[];
   private readonly _traits: string[];

  constructor(abilityScoreIncrease: number, name: string, speed: number, size: string, languages: string[], traits: string[]) {
    this._abilityScoreIncrease = abilityScoreIncrease;
    this._name = name;
    this._speed = speed;
    this._size = size;
    this._languages = languages;
    this._traits = traits;
  }


  get abilityScoreIncrease(): number {
    return this._abilityScoreIncrease;
  }

  get name(): string {
    return this._name;
  }

  get speed(): number {
    return this._speed;
  }

  get size(): string {
    return this._size;
  }

  get languages(): string[] {
    return this._languages;
  }

  get traits(): string[] {
    return this._traits;
  }
}
