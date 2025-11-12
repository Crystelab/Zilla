export interface ILabel {
  id: number;
  name: string;
  colour: string;
}

export class Label implements ILabel {
  id: number;
  name: string;
  colour: string;

  constructor(id: number, name: string, colour: string) {
    this.id = id;
    this.name = name;
    this.colour = colour;
  }
}