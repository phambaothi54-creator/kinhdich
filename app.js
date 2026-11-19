const $ = s => document.querySelector(s);
const names = [
["Thuần Càn","乾","Trời; sáng tạo, mạnh mẽ và chủ động."],["Thuần Khôn","坤","Đất; tiếp nhận, nuôi dưỡng và thuận theo."],
["Thủy Lôi Truân","屯","Khởi đầu nhiều trở ngại; cần kiên nhẫn và tổ chức."],["Sơn Thủy Mông","蒙","Còn thiếu sáng tỏ; nên học hỏi và tìm người chỉ dẫn."],
["Thủy Thiên Nhu","需","Chờ thời, tích lũy điều kiện trước khi hành động."],["Thiên Thủy Tụng","訟","Có bất đồng; nên tránh tranh chấp không cần thiết."],
["Địa Thủy Sư","師","Cần kỷ luật, kế hoạch và người dẫn dắt."],["Thủy Địa Tỷ","比","Hợp tác, liên kết và chọn đúng cộng sự."],
["Phong Thiên Tiểu Súc","小畜","Tích lũy nhỏ, chưa nên nóng vội."],["Thiên Trạch Lý","履","Đi đúng phép tắc, thận trọng trong ứng xử."],
["Địa Thiên Thái","泰","Giao hòa, hanh thông; thuận lợi để phát triển."],["Thiên Địa Bĩ","否","Bế tắc tạm thời; nên giữ sức và chờ chuyển biến."],
["Thiên Hỏa Đồng Nhân","同人","Đồng lòng, tìm tiếng nói chung."],["Hỏa Thiên Đại Hữu","大有","Có nguồn lực và cơ hội; cần biết chia sẻ."],
["Địa Sơn Khiêm","謙","Khiêm nhường, giữ chừng mực sẽ bền."],["Lôi Địa Dự","豫","Khí thế khởi sắc; cần chuẩn bị kỹ trước khi tiến."],
["Trạch Lôi Tùy","隨","Linh hoạt theo hoàn cảnh nhưng không đánh mất nguyên tắc."],["Sơn Phong Cổ","蠱","Sửa chữa vấn đề cũ, chỉnh đốn nền tảng."],
["Địa Trạch Lâm","臨","Cơ hội đến gần; cần chủ động và có trách nhiệm."],["Phong Địa Quan","觀","Quan sát toàn cục trước khi quyết định."],
["Hỏa Lôi Phệ Hạp","噬嗑","Cần xử lý dứt điểm trở ngại, minh bạch nguyên tắc."],["Sơn Hỏa Bí","賁","Chú trọng hình thức nhưng không bỏ quên thực chất."],
["Sơn Địa Bác","剝","Có dấu hiệu suy giảm; nên bảo toàn điều cốt yếu."],["Địa Lôi Phục","復","Phục hồi, quay lại đúng hướng, khởi đầu chu kỳ mới."],
["Thiên Lôi Vô Vọng","無妄","Giữ chân thành, tránh tính toán thiếu thực tế."],["Sơn Thiên Đại Súc","大畜","Tích lũy tri thức và nội lực trước bước lớn."],
["Sơn Lôi Di","頤","Nuôi dưỡng thân tâm, chú ý lời nói và nguồn tiếp nhận."],["Trạch Phong Đại Quá","大過","Gánh nặng vượt mức; cần điều chỉnh cấu trúc."],
["Thuần Khảm","坎","Nhiều thử thách; bình tĩnh, đi từng bước an toàn."],["Thuần Ly","離","Sáng rõ, nương vào điều đúng đắn và sự tỉnh táo."],
["Trạch Sơn Hàm","咸","Cảm ứng, thu hút và sự chân thành trong quan hệ."],["Lôi Phong Hằng","恆","Bền bỉ, ổn định và duy trì cam kết."],
["Thiên Sơn Độn","遯","Lùi đúng lúc để giữ thế và tránh hao tổn."],["Lôi Thiên Đại Tráng","大壯","Có sức tiến; cần tiết chế để không quá đà."],
["Hỏa Địa Tấn","晉","Tiến triển, được ghi nhận khi làm đúng cách."],["Địa Hỏa Minh Di","明夷","Ánh sáng bị che; nên kín đáo và bảo vệ mình."],
["Phong Hỏa Gia Nhân","家人","Ổn định nội bộ, phân định vai trò và trách nhiệm."],["Hỏa Trạch Khuê","睽","Khác biệt quan điểm; tìm điểm chung thay vì ép buộc."],
["Thủy Sơn Kiển","蹇","Đường đi khó; nên tìm trợ lực và đổi phương án."],["Lôi Thủy Giải","解","Tháo gỡ, giải tỏa áp lực và xử lý tồn đọng."],
["Sơn Trạch Tổn","損","Bớt điều không cần thiết để bảo toàn nguồn lực."],["Phong Lôi Ích","益","Gia tăng lợi ích qua học hỏi và hỗ trợ lẫn nhau."],
["Trạch Thiên Quải","夬","Cần quyết đoán, rõ ràng nhưng tránh cực đoan."],["Thiên Phong Cấu","姤","Cuộc gặp bất ngờ; tỉnh táo trước sức hấp dẫn nhất thời."],
["Trạch Địa Tụy","萃","Tập hợp nguồn lực, xây dựng cộng đồng."],["Địa Phong Thăng","升","Từng bước đi lên nhờ kiên trì và nền tảng."],
["Trạch Thủy Khốn","困","Bị giới hạn; tiết kiệm lực, tìm cách tháo nút thắt."],["Thủy Phong Tỉnh","井","Giá trị bền vững nằm ở nền tảng và nguồn lực chung."],
["Trạch Hỏa Cách","革","Đổi mới, thay cái cũ khi thời điểm đã chín."],["Hỏa Phong Đỉnh","鼎","Tái cấu trúc để tạo giá trị và vị thế mới."],
["Thuần Chấn","震","Biến động bất ngờ; giữ bình tĩnh và chuẩn bị."],["Thuần Cấn","艮","Dừng đúng lúc, giữ giới hạn và tập trung nội tâm."],
["Phong Sơn Tiệm","漸","Tiến triển chậm mà chắc, theo đúng trình tự."],["Lôi Trạch Quy Muội","歸妹","Quan hệ hoặc cam kết chưa cân bằng; cần xem lại vị thế."],
["Lôi Hỏa Phong","豐","Thời kỳ sung mãn; càng thuận càng cần tỉnh táo."],["Hỏa Sơn Lữ","旅","Ở thế tạm thời; linh hoạt và giữ lễ."],
["Thuần Tốn","巽","Thâm nhập bằng mềm mỏng, kiên trì và khéo léo."],["Thuần Đoài","兌","Niềm vui, giao tiếp và sự trao đổi chân thành."],
["Phong Thủy Hoán","渙","Tan rã điều cũ để khơi thông; cần quy tụ lại."],["Thủy Trạch Tiết","節","Tiết chế, đặt giới hạn và quản trị nguồn lực."],
["Phong Trạch Trung Phu","中孚","Thành tín, giữ lời và xây dựng niềm tin."],["Lôi Sơn Tiểu Quá","小過","Việc nhỏ có thể tiến; tránh bước quá tầm."],
["Thủy Hỏa Ký Tế","既濟","Việc đã thành nhưng cần giữ ổn định, phòng sơ suất."],["Hỏa Thủy Vị Tế","未濟","Chưa hoàn tất; còn cơ hội điều chỉnh và hoàn thiện."]
];
// Bit order: lower trigram first, with bottom line as bit 0.
const lookup = new Map();
names.forEach((n,i)=>lookup.set(i,n));
function bitsToIndex(lines){return lines.reduce((v,b,i)=>v+(b?1<<i:0),0)}
function hex(lines){return names[bitsToIndex(lines)]}
function renderLines(el,lines,moving=[]){el.innerHTML='';for(let i=5;i>=0;i--){let d=document.createElement('div');d.className='line '+(lines[i]?'':'broken')+(moving.includes(i)?' moving':'');d.innerHTML='<span></span><span></span>';el.append(d)}}
function nuclear(lines){return [lines[1],lines[2],lines[3],lines[2],lines[3],lines[4]]}
function describe(topic,lines,moving,main,changed){
 const topics={general:"Nhìn tổng thể hoàn cảnh, ưu tiên quan sát các điều kiện thực tế.",career:"Về công việc, nên đối chiếu năng lực, nguồn lực, thời điểm và cách phối hợp.",love:"Về tình cảm, cần đặt trọng tâm vào giao tiếp, sự tôn trọng và tính tương hỗ.",money:"Về tài chính, hãy xem xét dòng tiền, rủi ro và khả năng chịu đựng trước khi quyết định.",study:"Về học tập, kết quả thường gắn với phương pháp, kỷ luật và thời gian chuẩn bị.",health:"Về sức khỏe, quẻ không thay thế chẩn đoán hay tư vấn y tế; hãy dựa vào chuyên gia.",travel:"Về xuất hành, cần kiểm tra lịch trình, an toàn và điều kiện thực tế."};
 let m=moving.length?`Có ${moving.length} hào động ở vị trí ${moving.map(x=>x+1).join(', ')} (tính từ dưới lên). Đây là những điểm cần chú ý khi sự việc chuyển biến.`:"Không có hào động: nên đọc trọng tâm ở tượng quẻ chủ và bối cảnh hiện tại.";
 return `<p>${main[2]}</p><p>${topics[topic]||topics.general}</p><p>${m}</p><p>Quẻ biến ${changed[0]} (${changed[1]}) gợi ý hướng chuyển dịch. Hãy xem đây là một lăng kính suy ngẫm, sau đó kiểm chứng bằng dữ kiện và hành động cụ thể.</p>`;
}
function createCoins(){return Array.from({length:6},()=>[6,7,8,9][Math.floor(Math.random()*4)])}
function initGrid(){let grid=$('#coinGrid');grid.innerHTML='';for(let i=0;i<6;i++){let d=document.createElement('div');d.className='coin-cell';d.innerHTML=`<label>Hào ${i+1} · ${i===0?'dưới':'từ dưới'}</label><select id="line${i}"><option value="6">6 · Lão âm</option><option value="7" selected>7 · Thiếu dương</option><option value="8">8 · Thiếu âm</option><option value="9">9 · Lão dương</option></select>`;grid.append(d)}}
function setRandom(){createCoins().forEach((v,i)=>$('#line'+i).value=v)}
function cast(){
 const values=Array.from({length:6},(_,i)=>Number($('#line'+i).value));
 const mainLines=values.map(v=>v===7||v===9), moving=values.map((v,i)=>(v===6||v===9)?i:-1).filter(i=>i>=0);
 const changedLines=mainLines.map((v,i)=>moving.includes(i)?!v:v);
 const main=hex(mainLines), changed=hex(changedLines), nuc=hex(nuclear(mainLines));
 $('#questionDisplay').textContent=$('#question').value.trim()||'Không ghi câu hỏi cụ thể';
 $('#mainName').textContent=main[0]+' · '+main[1];$('#changedName').textContent=changed[0]+' · '+changed[1];$('#nuclearName').textContent=nuc[0]+' · '+nuc[1];
 $('#mainDesc').textContent=main[2];$('#changedDesc').textContent=changed[2];
 renderLines($('#mainLines'),mainLines,moving);renderLines($('#changedLines'),changedLines);renderLines($('#nuclearLines'),nuclear(mainLines));
 $('#moving').innerHTML=moving.length?moving.map(i=>`<p><b>Hào ${i+1}:</b> ${values[i]===6?'Lão âm chuyển dương':'Lão dương chuyển âm'}.</p>`).join(''):'<p>Quẻ tĩnh, không có hào động.</p>';
 $('#interpretation').innerHTML=describe($('#topic').value,mainLines,moving,main,changed);
 $('#lineTable').innerHTML=values.map((v,i)=>`<tr><td>${i+1}</td><td>${v===6||v===8?'Âm':'Dương'}</td><td>${({6:'Lão âm · động',7:'Thiếu dương · tĩnh',8:'Thiếu âm · tĩnh',9:'Lão dương · động'})[v]}</td><td>${moving.includes(i)?'Điểm chuyển biến cần lưu ý':'Duy trì, quan sát'}</td></tr>`).join('');
 $('#result').classList.remove('hidden');
 const record={date:new Date().toLocaleString('vi-VN'),question:$('#question').value.trim()||'Không ghi câu hỏi',main:main[0],changed:changed[0],values};
 let history=JSON.parse(localStorage.getItem('lucHaoHistory')||'[]');history.unshift(record);localStorage.setItem('lucHaoHistory',JSON.stringify(history.slice(0,20)));showHistory();$('#result').scrollIntoView({behavior:'smooth'});
}
function showHistory(){let h=JSON.parse(localStorage.getItem('lucHaoHistory')||'[]');$('#historyList').innerHTML=h.length?h.map(x=>`<div class="history-item"><div><b>${escapeHtml(x.question)}</b><br><span>${escapeHtml(x.main)} → ${escapeHtml(x.changed)}</span></div><span>${escapeHtml(x.date)}</span></div>`).join(''):'<p class="empty">Chưa có lần gieo quẻ nào được lưu trên thiết bị này.</p>'}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
$('#randomize').addEventListener('click',setRandom);$('#cast').addEventListener('click',cast);$('#print').addEventListener('click',()=>window.print());$('#clearHistory').addEventListener('click',()=>{if(confirm('Xóa toàn bộ lịch sử lưu trên thiết bị này?')){localStorage.removeItem('lucHaoHistory');showHistory()}});
$('#method').addEventListener('change',()=>{$('#coinInputs').style.display=$('#method').value==='coins'?'block':'none';$('#methodNote').textContent=$('#method').value==='coins'?'Gieo 3 đồng xu sáu lần, mỗi lần ghi nhận một hào từ dưới lên trên.':'Tạo sáu giá trị ngẫu nhiên theo quy ước 6, 7, 8, 9.'});
initGrid();setRandom();showHistory();
