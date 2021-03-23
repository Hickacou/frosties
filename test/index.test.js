const { expect } = require('chai');
const Frosties = require('../index');
describe('Frosties Informations', function () {
	it('gives right country', function () { expect(Frosties.country).to.equal('United States'); });
	it('gives right date', function () { expect(Frosties.date).to.equal(1952); });
	it('gives right full name', function () { expect(Frosties.fullName).to.equal('Frosted Flakes'); });
	it('gives right name', function () { expect(Frosties.name).to.equal('Frosties'); });
	it('gives right original name', function () { expect(Frosties.originalName).to.equal('Sugar Frosted Flakes'); });
	it('gives right packaging link', function () { expect(Frosties.packaging).to.equal('https://en.wikipedia.org/wiki/Frosted_Flakes#/media/File:Frosted-Flakes-Box-Small.jpg'); });
	it('gives right producer', function () { expect(Frosties.producer).to.equal('Kellogg Company'); });
	it('gives right type', function () { expect(Frosties.type).to.equal('breakfast cereal'); });
});