import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
