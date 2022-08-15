/*import { tsParticles } from "tsparticles-engine";
loadTrianglesPreset(tsParticles);

tsParticles.load("tsparticles", {
	preset: "links"
});
*/
import {particles} from "../node_modules/particles.js/particles.js";
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particles.load('particles-js', 'assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
});
