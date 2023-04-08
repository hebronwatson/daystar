
import jq from 'json-query';
import fs from 'fs';


var KJV_BIBLE_JSON_FILEPATH = 'bible/kjv.json';
const bible = JSON.parse(fs.readFileSync(KJV_BIBLE_JSON_FILEPATH));
const metadata = {
    translation: bible.translation,
    abbreviation: bible.abbreviation,
    description: bible.description,
    lang: bible.lang
}

// get relevant fields from the Bible Json
const bibleVerseQuery = (book, chapter, verse) => {
    const content = jq(`books[name=${book}].chapters[**][chapter=${chapter.toString()}].verses[**][verse=${verse.toString()}]`, {data: bible}).value;
    return {
        ...metadata,
        book: book,
        chapter: content.chapter,
        verse: content.verse,
        name: content.name,
        content: content.text
    };
};

export default bibleVerseQuery;