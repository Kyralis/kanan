// No Player Zoom Transparency (Step29)

var pattern1 = scan('client.exe', '4E F7 DE 1B F6 81 E6 FE 07 00 00');
var pattern2 = scan('client.exe', '74 17 53 57 6a 02 57');

if (debug)
{
	send(pattern1);
	send(pattern2);
}

if (pattern1 == NULL || pattern2 == NULL)
	send('Failed to apply patch.');
else
{
	patch(pattern1.add(6), 0xC7);
	patch(pattern1.add(7), 0xF0);
	patch(pattern1.add(8), 0x0F);
	patch(pattern2.add(5), 0x05);
}
