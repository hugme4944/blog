import { newRidgeState } from "react-ridge-state";
import { Article } from "../dummy";

export const recentState = newRidgeState<Article | null>(null);
