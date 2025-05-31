import TextBlock from "@components/TextBlock";
import type {Component} from "@domain/Component.ts";
import {TEXT_BLOCK_KEY} from "@domain/Key.ts";

export const ComponentList: Record<string, Component> = {
    [TEXT_BLOCK_KEY]: TextBlock()
};