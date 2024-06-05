import {v4 as uuid} from 'uuid';


const CALORIES_IN_PROTEINS = 4;
const CALORIES_IN_FATS = 9;
const CALORIES_IN_CARBOHYDRATES = 4;

export enum Ru_Units {
  gram = 'gram',
  milliliter = 'milliliter',
  piece = 'piece'
}

export type ProductOptions = {
  id?: string;
  proteins: number;
  fats: number;
  carbohydrates: number;
  unit: Ru_Units
}

export class Product {
  private readonly id: string;
  private proteins: number;
  private fats: number;
  private carbohydrates: number;
  private unit: Ru_Units;

  constructor(props: ProductOptions) {
    if (props.id) {
      this.id = uuid();
    }
    Object.assign(this, props);
  }

  public getId(): string {
    return this.id;
  }

  public getCalories() {
    return this.proteins * CALORIES_IN_PROTEINS + this.fats * CALORIES_IN_FATS + this.carbohydrates * CALORIES_IN_CARBOHYDRATES;
  };

  public getPFC(numberOfUnits?: number): {
    proteins: number;
    fats: number;
    carbohydrates: number;
    calories: number;
  } {
    if (!numberOfUnits) {
      return {
        proteins: this.proteins,
        fats: this.carbohydrates,
        carbohydrates: this.carbohydrates,
        calories: this.getCalories(),
      };
    }
    const coefficient = this.getCoefficient(numberOfUnits);
    return {
      proteins: Math.round(this.proteins * coefficient),
      fats: Math.round(this.fats * coefficient),
      carbohydrates: Math.round(this.carbohydrates * coefficient),
      calories: Math.round(this.getCalories() * coefficient),
    };
  }

  private getCoefficient(numberOfUnits: number) {
    switch (this.unit) {
      case Ru_Units.gram:
      case Ru_Units.milliliter:
        return numberOfUnits / 100;
      case Ru_Units.piece:
        return numberOfUnits;
    }
  }

}
