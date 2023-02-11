import OurStory from "../contracts/OurStory.cdc"

transaction(nextAuthor: Address, snippet: String) {
    var signer: Address
    prepare(signer: AuthAccount) {
        self.signer = signer.address
    }
    execute {
        OurStory.appendToStory(
            storySnippet: snippet,
            author: self.signer,
            nextAuthor: nextAuthor
        )
    }
}