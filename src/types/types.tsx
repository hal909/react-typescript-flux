export interface Action<Type extends string = string> {}

export interface Payload {
  action: Action,
  data: any
}