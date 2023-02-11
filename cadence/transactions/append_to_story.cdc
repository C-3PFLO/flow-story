import Story from "../contracts/Story.cdc"

transaction(nextAuthor: Address, snippet: String) {
    var signer: Address
    prepare(signer: AuthAccount) {
        self.signer = signer.address
    }
    execute {
        Story.appendToStory(
            storySnippet: snippet,
            author: self.signer,
            nextAuthor: nextAuthor
        )
    }
}