import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  PrimaryButton,
  mergeStyles,
  FontSizes,
  TextField,
  IButtonProps,
  Pivot,
  PivotItem,
  Label
} from "office-ui-fabric-react";
import { ThisComponentIsUsed } from "./TestComponents";

export default function App() {
  return (
    <>
    <Pivot>
      <PivotItem headerText = "foo1"/>
    </Pivot>
    <ThisComponentIsUsed />
    </>
  );
}
