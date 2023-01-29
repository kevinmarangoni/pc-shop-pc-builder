import cpu from "/pages/api/database/cpu.json";
import cpuFan from "/pages/api/database/cpu_fan.json"
import cases from "/pages/api/database/cases.json"
import caseFan from "/pages/api/database/case_fan.json"
import gpu from "/pages/api/database/gpus.json"
import keyboard from "/pages/api/database/keyboards.json"
import motherboard from "/pages/api/database/motherboards.json"
import mouse from "/pages/api/database/mouse.json"
import psu from "/pages/api/database/psu.json"
import ram from "/pages/api/database/ram.json"
import storage from "/pages/api/database/storage.json"

import randomizer from "./randomizer";

export async function getAllItems(){
    return [...cpu,...cpuFan,...cases,...caseFan,...gpu,...keyboard,...motherboard,...mouse,...psu,...ram,...storage]
}

export async function getAllItemsRandomized(){
    return randomizer(getAllItems())
}

export async function getTables(){
    return {cpu,cpuFan,cases,caseFan,gpu,keyboard,motherboard,mouse,psu,ram,storage}
}
