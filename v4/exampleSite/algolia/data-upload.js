const argv = require("yargs/yargs")(process.argv.slice(2))
  .boolean("c").alias("c", "clear-index").describe("c", "Clear Algolia index before upload")
  .alias("f", "index-file").nargs("f", 1).describe("f", "Index file to upload to Algolia")
  .alias("a", "app-id").nargs("a", 1).describe("a", "Algolia application ID")
  .alias("k", "admin-api-key").nargs("k", 1).describe("k", "Algolia admin API key")
  .alias("n", "index-name").nargs("n", 1).describe("n", "Algolia index name")
  .alias("u", "base-url").nargs("u", 1).describe("u", "Site base URL")
  .demandOption(["f", "a", "k", "n"])
  .help("h")
  .alias("h", "help")
  .argv;

const algoliaPackage = require("algoliasearch");
const client = algoliaPackage.algoliasearch(argv["app-id"], argv["admin-api-key"]);
const jsonfile = require("jsonfile");

const replaceBaseUrl = (indices) => {
  indices.forEach(index => {
    let offset = -2;
    if (index["type"] === "article") {
      offset = -3;
    }
    let tokens = index["url"].split("/").slice(offset);
    index["url"] = argv["base-url"] + "/" + tokens.join("/");
  });
}

const saveObjects = () => {
  jsonfile.readFile(argv["index-file"], function (err, indices) {
    if (err) {
      console.error(err);
    } else {
      if (argv["base-url"]) {
        replaceBaseUrl(indices);
      }
      client.saveObjects({
        indexName: argv["index-name"],
        objects: indices
      }).then(() => {
        console.log("Uploaded data to index %s", argv["index-name"]);
      })
      .catch(err => {
        console.log(err);
      });
    }
  })
};

if (argv["clear-index"]) {
  client.clearObjects({
    indexName: argv["index-name"]
  }).then(() => {
    console.log("Cleared data from index %s", argv["index-name"]);
    saveObjects();
  });
} else {
  saveObjects();
}
