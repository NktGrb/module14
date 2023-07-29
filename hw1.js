const parser = new DOMParser();

const xmlList = `<list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
    </list>
`

const xmlDOM = parser.parseFromString (xmlList, "text/xml");

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelector('student');
const nameNode = listNode.querySelector('name');
const firstNode = listNode.querySelector('first');
const secondNode = listNode.querySelector('second');
const ageNode = listNode.querySelector('age');
const profNode = listNode.querySelector('prof');

const langAttr = nameNode.getAttribute('lang');

const result = {
    student: studentNode.textContent,
    name: nameNode,
    age: Number(ageNode.textContent),
    first: firstNode.textContent,
    second: secondNode.textContent,
    prof: profNode.textContent,
    lang: langAttr
};
console.log('result', result);