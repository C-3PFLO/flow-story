import Story from "../contracts/Story.cdc"

pub fun main(): Address {
    return Story.currentAuthor
}