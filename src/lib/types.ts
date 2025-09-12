export interface Car {
  id: string;
  type: "New" | "Used";
  make: string;
  model: string;
  year: number;
  km: number;
  price: number;
  status: string;
  tags: string[];
}

export interface Lead {
  id: number;
  name: string;
  interest: string;
  stage: string;
  lastTouch: string;
}

export interface Campaign {
  id: string;
  name: string;
  channel: string;
  status: "idle" | "running";
  budget: number;
  target: string;
  lastRun: string | null;
}

export interface AudienceMessage {
  id: number;
  text: string;
  time: string;
}

export interface AutomationLog {
  time: string;
  text: string;
}

export interface User {
  id: number;
  name: string;
  provider: string;
}

export interface PriceBand {
  promo: number;
  reasonable: number;
  market: number;
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: string;
  action: string;
}