import {SkillClass} from '../skills/SkillClass';

export abstract class DnDClass {

   private readonly _hitDice: string;
   private readonly _hitPoints: number;
   private readonly _armor: string;
   private readonly _weapons: string[];
   private readonly _tools: string[];
   private readonly _savingThrows: string[];
   private readonly _skills: Map<number, SkillClass>;
   private readonly _equipment: string[];

  constructor(hitDice: string, hitPoints: number, armor: string, weapons: string[], tools: string[], savingThrows: string[], skills: Map<number, SkillClass>, equipment: string[]) {
    this._hitDice = hitDice;
    this._hitPoints = hitPoints;
    this._armor = armor;
    this._weapons = weapons;
    this._tools = tools;
    this._savingThrows = savingThrows;
    this._skills = skills;
    this._equipment = equipment;
  }


  get hitDice(): string {
    return this._hitDice;
  }

  get hitPoints(): number {
    return this._hitPoints;
  }

  get armor(): string {
    return this._armor;
  }

  get weapons(): string[] {
    return this._weapons;
  }

  get tools(): string[] {
    return this._tools;
  }

  get savingThrows(): string[] {
    return this._savingThrows;
  }

  get skills(): Map<number, SkillClass> {
    return this._skills;
  }

  get equipment(): string[] {
    return this._equipment;
  }
}
