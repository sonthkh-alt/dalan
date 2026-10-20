/* ============================================================
   Gửi những người phụ nữ của gia đình · 20/10
   Từ những người đàn ông trong gia đình Dạ Lan (Thanh Hóa)

   Muốn sửa nội dung: chỉ cần sửa trong RECIPIENTS bên dưới.
   Link riêng cho từng người:  ?co=loan | ?co=lien | ?co=baoanh
   ============================================================ */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

const RECIPIENTS = {
  loan: {
    key: 'loan',
    name: 'Trịnh Thị Loan',
    shortName: 'mẹ',
    honorific: 'Kính gửi mẹ, kính gửi bà',
    envelopeHonorific: 'Kính gửi mẹ · bà',
    cardHonorific: 'Kính gửi mẹ · bà',
    introScript: 'Người giữ lửa cho cả nhà, và cho cả Dạ Lan.',
    introLead: 'Hôm nay, chúng con – Luân, Sơn, Tùng và Bách – xin dành một khoảng lặng để nói lời cảm ơn. Vì một đời tảo tần, vì bàn tay đã gây dựng Dạ Lan từ hai cơ sở nhỏ và 52 người lao động, và vì mâm cơm gia đình chưa một ngày nào thiếu hơi ấm.',
    introDetails: ['TỪ NĂM 2000 ĐẾN HÔM NAY', '03 LỜI CHÚC TỪ CON CHÁU', '01 TẤM LÒNG BIẾT ƠN'],
    introNote: 'Mẹ ơi, bà ơi,<br>có thư cho mẹ…',
    photo: { src: 'assets/photos/ba-tung-bach.jpg', alt: 'Bà Loan cùng hai cháu Tùng và Bách trong áo dài đỏ', focus: '50% 50%' },
    letter: {
      salutation: 'Kính gửi mẹ, kính gửi bà – Trịnh Thị Loan,',
      body: [
        'Nhân ngày Phụ nữ Việt Nam 20/10, những người đàn ông trong nhà – con trai Luân, con rể Sơn và hai cháu Tùng, Bách – xin được viết đôi dòng gửi mẹ. Bình thường, chúng con quen nói với mẹ bằng việc làm nhiều hơn bằng lời. Hôm nay xin được nói bằng lời một lần.',
        'Chúng con biết câu chuyện Dạ Lan bắt đầu từ năm 2000, từ hai cơ sở nhỏ, 52 người lao động và một số vốn rất khiêm tốn. Để từ đó có một Dạ Lan Center, một Dạ Lan Star, một Dạ Lan Event, một nhà máy, và hơn hai trăm gia đình có việc làm ổn định – là bao nhiêu đêm mẹ thức, bao nhiêu chuyến đi sớm về muộn, bao nhiêu lần mẹ đứng ra gánh phần khó nhất.',
        'Nhưng điều chúng con nhớ nhất không phải những tấm bằng khen, dù mẹ có rất nhiều. Là cách mẹ vẫn tự tay nêm nồi canh cho cả nhà sau một ngày dài. Là cách mẹ dạy con cháu rằng làm ăn tử tế trước, rồi mới nói đến lời lãi. Là chỗ dựa lặng lẽ mà bất cứ ai trong nhà gặp chuyện đều tìm về đầu tiên.',
        'Mẹ đã trao cho chúng con một gia đình và cả một sự nghiệp để tiếp nối. Chúng con xin hứa sẽ giữ gìn cả hai bằng sự tử tế mà mẹ đã dạy.'
      ],
      wishes: 'Nhân ngày 20/10, chúng con kính chúc mẹ luôn mạnh khỏe, bình an, sống vui bên con cháu. Mong mẹ cho phép mình nghỉ ngơi nhiều hơn một chút, tin tưởng vào thế hệ sau nhiều hơn một chút, và mỗi ngày đều có một niềm vui nho nhỏ. Chúc mẹ một ngày thật đẹp, cùng nhiều ngày đẹp như thế.',
      closing: 'Với tất cả lòng biết ơn và kính yêu,',
      signers: ['Con trai Luân', 'Con rể Sơn', 'Hai cháu Tùng và Bách']
    },
    milestones: [
      { title: 'Năm 2000 – bắt đầu từ 52 người', body: 'Dạ Lan ra đời từ việc chuyển đổi một bộ phận của doanh nghiệp Nhà nước, với hai cơ sở, 52 người lao động và 700 triệu đồng vốn điều lệ. Hội đồng quản trị khi ấy có ba thành viên – cả ba đều là phụ nữ. Giữa những năm khó khăn nhất, mẹ đã chọn giữ người, giữ nghề, giữ chữ tín.', quote: 'Bắt đầu nhỏ, nhưng không bao giờ làm nhỏ.', icon: '✧', book: 'Một khởi đầu<br>đáng nhớ.', tab: ['Năm 2000', 'Những bước đầu tiên'] },
      { title: 'Những năm mở rộng', body: 'Từ 2005, Dạ Lan xây thêm cơ sở, trở thành một trong những đơn vị đầu tiên của tỉnh làm tổ chức sự kiện (2008), đầu tư dây chuyền nước tinh khiết, rồi năm 2012 mua lại Công ty Toàn Hà để biến thành trung tâm sự kiện. Số người lao động từ 52 lên hơn 200. Mỗi quyết định ấy đều có dấu tay của mẹ.', quote: 'Mỗi viên gạch đều có mồ hôi của mẹ.', icon: '⌘', book: 'Cùng nhau,<br>đi xa hơn.', tab: ['Mở rộng', 'Từ 52 lên hơn 200 người'] },
      { title: 'Những danh hiệu – và điều ở phía sau', body: 'Huân chương Lao động, Bằng khen của Thủ tướng Chính phủ, Chiến sĩ thi đua toàn quốc, Huy chương vàng “Đầu bếp tài hoa”, Cúp “Bông hồng vàng”, Nữ doanh nhân tiêu biểu toàn quốc… Chúng con tự hào về từng danh hiệu ấy. Nhưng tự hào hơn cả là ở nhà, mẹ vẫn là mẹ, vẫn là bà – giản dị, ấm áp và luôn hỏi “các con ăn gì chưa”.', quote: 'Danh hiệu lớn nhất của mẹ là cả nhà này.', icon: '❀', book: 'Bông hồng vàng<br>của cả nhà.', tab: ['Danh hiệu', 'Và điều ở phía sau'] },
      { title: 'Hôm nay – người giữ lửa', body: 'Ở vị trí Chủ tịch Hội đồng quản trị, mẹ vẫn là người được hỏi ý kiến đầu tiên và là người lo xa nhất. Ở nhà, mẹ là bà ngoại của Tùng, Bách, Bảo Linh và Thỏ, là người giữ cho mâm cơm sum họp mỗi dịp lễ luôn đủ mặt. Chúng con mong từ nay mẹ sẽ để mình được nghỉ ngơi nhiều hơn, vì phần còn lại đã có chúng con.', quote: 'Mẹ cứ yên tâm, đã có chúng con.', icon: '↗', book: 'Phần còn lại,<br>đã có chúng con.', tab: ['Hôm nay', 'Người giữ lửa'] }
    ],
    cards: [
      { ico: '🍲', title: 'Nồi canh mẹ nấu', small: 'BỮA CƠM NHÀ', back: 'Dù bận đến đâu, mẹ vẫn muốn tự tay nêm nồi canh. Người làm “Tinh hoa ẩm thực xứ Thanh” cho hàng nghìn thực khách, nhưng món ngon nhất với chúng con vẫn là bữa cơm ở nhà.' },
      { ico: '🏮', title: 'Chữ tín trước, lời lãi sau', small: 'CÁCH MẸ LÀM ĂN', back: 'Mẹ dạy chúng con rằng làm ăn phải tử tế trước. Chứng nhận ISO, bằng khen hay danh hiệu chỉ là kết quả đi sau của điều đó.' },
      { ico: '🌱', title: 'Giữ người trong lúc khó', small: 'NHỮNG NĂM 2000', back: 'Khi công ty còn 52 người và rất ít vốn, mẹ chọn giữ người, giữ nghề. Hơn 200 gia đình hôm nay có việc làm ổn định là từ lựa chọn ấy.' },
      { ico: '👵', title: 'Bà ngoại của các cháu', small: 'Ở NHÀ', back: 'Tùng, Bách, Bảo Linh và bé Thỏ không để tâm bà là Chủ tịch Hội đồng quản trị. Các cháu chỉ biết bà ngoại hay để phần đồ ăn ngon, hay dắt đi chơi, hay hỏi “cháu học hành thế nào”.' },
      { ico: '🧭', title: 'Lo xa cho cả nhà', small: 'ĐIỂM TỰA', back: 'Bất cứ ai trong nhà gặp chuyện khó, người được tìm đến đầu tiên vẫn là mẹ. Mẹ ít nói, nhưng chưa bao giờ để ai một mình.' },
      { ico: '🤲', title: 'Dạy con cháu sẻ chia', small: 'TẤM LÒNG', back: 'Từ mẹ, cả nhà học được cách cho đi – từ những phần quà Tết cho người nghèo đến việc đỡ đầu trẻ mồ côi mà con gái mẹ đang tiếp nối.' }
    ],
    gratitude: 'Có những người gây dựng cả một sự nghiệp,<br>và vẫn giữ cho bếp nhà luôn ấm.',
    voices: [
      { label: 'CON TRAI', name: 'Luân', title: 'Gửi mẹ', text: ['Mẹ ơi, con lớn lên trong những năm Dạ Lan còn nhỏ, nên con hiểu mẹ đã đi qua những gì để có hôm nay. Con không nói nhiều, nhưng con nhìn thấy hết.', 'Chúc mẹ 20/10 thật vui. Mẹ cứ giao việc cho chúng con nhiều hơn, và dành thời gian cho mình nhiều hơn. Con hứa sẽ sống đúng như cách mẹ đã dạy.'], sign: 'Con trai của mẹ' },
      { label: 'CON RỂ', name: 'Sơn', title: 'Kính gửi mẹ', text: ['Con may mắn được về làm con trong một gia đình có mẹ. Mẹ không chỉ cho con một người vợ tuyệt vời, mà còn dạy con bằng chính cách mẹ sống: làm việc tử tế, lo cho người khác trước, và không bao giờ bỏ ai lại phía sau.', 'Nhân ngày 20/10, con kính chúc mẹ mạnh khỏe, an vui bên con cháu. Mẹ đã lo cho cả nhà mấy chục năm, giờ xin mẹ để chúng con lo cho mẹ.'], sign: 'Con rể Sơn' },
      { label: 'CÁC CHÁU', name: 'Tùng & Bách', title: 'Kính gửi bà ngoại', text: ['Bà ngoại ơi, Tùng và Bách chúc bà 20/10 thật vui và thật nhiều sức khỏe. Chúng cháu thích nhất là những bữa cơm có bà, những chuyến đi có bà, và những lúc bà hỏi chúng cháu học hành thế nào.', 'Chúng cháu sẽ cố gắng học giỏi, ngoan ngoãn để bà vui. Bà nhớ giữ sức khỏe để còn đi chơi với chúng cháu – và cả Bảo Linh, bé Thỏ – nhiều nữa nhé!'], sign: 'Tùng và Bách' }
    ],
    candle: 'Mẹ đã dành cả đời chăm chút cho người khác – cho công ty, cho con cháu. Với ngọn nến nhỏ này, chúng con muốn gửi một điều ước dành cho chính mẹ.',
    card: { text: 'Cảm ơn mẹ vì một đời tảo tần cho cả nhà.<br>Chúc mẹ luôn mạnh khỏe, bình an và nhiều niềm vui.', sign: 'LUÂN · SƠN · TÙNG · BÁCH<br>GIA ĐÌNH DẠ LAN · 20/10/2026' },
    closing: 'Chúng con mong sẽ sống tử tế hơn, làm việc cẩn thận hơn và biết lo cho nhau nhiều hơn – như cách mẹ đã làm suốt mấy chục năm. Đó là cách chúng con muốn trân trọng những điều mẹ đã dành cho gia đình này.',
    closingSignatures: ['Con trai Luân', 'Con rể Sơn', 'Tùng', 'Bách'],
    pronoun: 'mẹ'
  },

  lien: {
    key: 'lien',
    name: 'Nguyễn Thị Hồng Liên',
    shortName: 'em',
    honorific: 'Gửi em, gửi mẹ, gửi chị',
    envelopeHonorific: 'Gửi vợ · mẹ · chị',
    cardHonorific: 'Gửi em · vợ · mẹ · chị',
    introScript: 'Người đứng đầu một công ty, một hiệp hội – và là trái tim của nhà mình.',
    introLead: 'Hôm nay, anh cùng em Luân, Tùng và Bách xin dành một khoảng lặng để nói lời cảm ơn. Vì những ngày em gánh việc của một Giám đốc, một Chủ tịch hiệp hội với hơn 200 doanh nghiệp hội viên, và vẫn về nhà kịp bữa cơm tối. Vì em làm được tất cả những điều ấy mà hiếm khi kể là mình mệt.',
    introDetails: ['GIÁM ĐỐC CÔNG TY CP DẠ LAN', 'CHỦ TỊCH HIỆP HỘI DOANH NHÂN NỮ THANH HÓA', '01 TRÁI TIM CỦA CẢ NHÀ'],
    introNote: 'Em ơi, mẹ ơi,<br>có thư cho em…',
    photo: { src: 'assets/photos/lien-va-me.jpg', alt: 'Liên bên mẹ Loan', focus: '50% 50%' },
    letter: {
      salutation: 'Gửi em – Nguyễn Thị Hồng Liên, vợ, mẹ và chị của chúng tôi,',
      body: [
        'Anh viết những dòng này thay cho tất cả những người đàn ông trong nhà – anh, em Luân, Tùng và Bách. Bình thường chúng ta hay nói với nhau về công việc, về lịch họp, về đơn hàng. Hôm nay anh muốn nói về em.',
        'Em là Giám đốc của một công ty hơn 200 người, kế thừa từ mẹ cả một sự nghiệp và không để nó dừng lại. Em là Chủ tịch Hiệp hội Doanh nhân nữ tỉnh Thanh Hóa, nơi hơn 200 doanh nghiệp đặt niềm tin, nơi mỗi năm hơn 10 tỷ đồng được gửi đến người nghèo và 133 em nhỏ mồ côi được đỡ đầu. Anh đã nhìn em đứng trên những sân khấu lớn, nói về trách nhiệm xã hội của nữ doanh nhân, và anh tự hào đến mức không biết nói gì.',
        'Nhưng điều anh biết ơn nhất lại là những lúc rất nhỏ. Là em vẫn nhớ hôm nay Tùng thi gì, Bách có ốm không. Là em về muộn nhưng vẫn ghé bếp xem cả nhà ăn gì. Là em mệt mà vẫn hỏi anh “hôm nay thế nào”. Anh biết em đã gánh nhiều hơn phần của mình, và gánh một cách rất lặng lẽ.',
        'Anh không hứa được những điều lớn. Anh chỉ hứa sẽ ở bên, sẽ chia việc nhà, sẽ là người đầu tiên em có thể dựa vào – khi ở ngoài kia em phải là người cho người khác dựa.'
      ],
      wishes: 'Nhân ngày 20/10, anh và cả nhà chúc em luôn mạnh khỏe, bình an và hạnh phúc. Mong những tâm huyết em dành cho Dạ Lan và cho các chị em doanh nhân được đáp lại bằng niềm vui, những ngày bận rộn luôn có khoảng nghỉ dịu dàng, và khi về nhà, em luôn thấy mình được yêu thương. Chúc em một ngày thật đẹp, cùng nhiều ngày đẹp như thế.',
      closing: 'Yêu em,',
      signers: ['Sơn – chồng của em', 'cùng em Luân, Tùng và Bách']
    },
    milestones: [
      { title: 'Người vợ, người mẹ', body: 'Trước khi là Giám đốc hay Chủ tịch, em là vợ, là mẹ. Là người giữ nhịp cho cả nhà: ai đi học, ai đi làm, ai đang cần một lời động viên. Anh và các con quen với sự có mặt ấy đến mức nhiều khi quên cảm ơn.', quote: 'Nhà là nơi em không cần chức danh.', icon: '♡', book: 'Nhà mình,<br>nơi em là em.', tab: ['Ở nhà', 'Người vợ, người mẹ'] },
      { title: 'Người Giám đốc Dạ Lan', body: 'Nhận lấy công ty từ mẹ là nhận lấy một trách nhiệm rất nặng: hơn 200 người lao động, bốn thương hiệu – Dạ Lan Center, Dạ Lan Star, Dạ Lan Event, Dạ Lan Sport – một nhà máy, và một cái tên đã gắn với “Tinh hoa ẩm thực xứ Thanh”. Em không chỉ giữ, em đưa Dạ Lan đi tiếp: chứng nhận ISO 22000:2018, quản lý số, những sảnh tiệc được làm mới.', quote: 'Kế thừa là tiếp tục đi, không phải đứng lại.', icon: '⌘', book: 'Giữ lửa,<br>và thắp thêm.', tab: ['Dạ Lan', 'Người Giám đốc'] },
      { title: 'Người Chủ tịch hiệp hội', body: 'Ở Hiệp hội Doanh nhân nữ tỉnh Thanh Hóa, em là người đứng đầu một “ngôi nhà chung” của hơn 200 doanh nghiệp do phụ nữ làm chủ. Em nói về trách nhiệm xã hội không bằng khẩu hiệu mà bằng con số: hơn 10 tỷ đồng mỗi năm cho an sinh xã hội, hàng nghìn suất quà Tết, 133 trẻ mồ côi được đỡ đầu, những ngôi nhà được sửa lại.', quote: 'Bản lĩnh trong kinh doanh, giàu lòng nhân ái.', icon: '✦', book: 'Một ngôi nhà chung,<br>em là người giữ cửa.', tab: ['Hiệp hội', 'Người Chủ tịch'] },
      { title: 'Chặng tiếp theo', body: 'Anh không biết em còn định đi xa đến đâu, nhưng anh biết chắc một điều: em không đi một mình. Phía sau em luôn có mẹ, có anh, có em Luân, có Tùng và Bách. Mong chặng tiếp theo em bớt vội hơn một chút, dành cho mình nhiều hơn một chút.', quote: 'Đi xa, nhưng luôn có nhà để về.', icon: '↗', book: 'Chặng tiếp theo,<br>có cả nhà cùng đi.', tab: ['Tiếp theo', 'Không đi một mình'] }
    ],
    cards: [
      { ico: '🌅', title: 'Dậy sớm hơn cả nhà', small: 'MỖI SÁNG', back: 'Em luôn là người dậy đầu tiên, lo cho Tùng, cho Bách rồi mới lo cho mình. Anh thấy, dù không phải lúc nào cũng nói.' },
      { ico: '🗂️', title: 'Hai chiếc ghế, một con người', small: 'GIÁM ĐỐC · CHỦ TỊCH', back: 'Vừa điều hành Dạ Lan, vừa dẫn dắt hơn 200 doanh nghiệp do phụ nữ làm chủ. Em làm cả hai mà hiếm khi than mình mệt.' },
      { ico: '🤲', title: '133 đứa trẻ', small: 'TRÁCH NHIỆM XÃ HỘI', back: 'Em và các chị em trong hiệp hội đỡ đầu 133 trẻ mồ côi, gửi hơn 10 tỷ đồng mỗi năm cho người nghèo. Tùng và Bách nhìn em và học được cách cho đi.' },
      { ico: '🍚', title: 'Vẫn ghé bếp dù về muộn', small: 'BUỔI TỐI', back: 'Về nhà sau một ngày họp dài, điều đầu tiên em làm vẫn là xem cả nhà đã ăn gì. Đó là điều anh muốn giữ mãi.' },
      { ico: '💬', title: '“Hôm nay thế nào?”', small: 'CÂU HỎI QUEN', back: 'Câu hỏi em dành cho anh, cho Tùng, cho Bách, cho em Luân, cho cả nhân viên. Rất ngắn, nhưng làm người được hỏi thấy mình quan trọng.' },
      { ico: '🌸', title: 'Con gái của mẹ', small: 'KẾ THỪA', back: 'Em nhận từ mẹ cả sự nghiệp và cách sống. Và em đang truyền lại điều đó cho Tùng và Bách bằng chính cách em sống mỗi ngày.' }
    ],
    gratitude: 'Có những người rất giỏi ở ngoài kia,<br>và vẫn dịu dàng khi về nhà.',
    voices: [
      { label: 'CHỒNG', name: 'Sơn', title: 'Gửi em', text: ['Em à, anh biết 20/10 của em thường là một ngày bận – đi chúc mừng các chị em, dự lễ, phát biểu. Nên anh muốn dành cho em một góc nhỏ thật yên, chỉ có nhà mình.', 'Cảm ơn em vì tất cả. Chúc em luôn khỏe, luôn vui, và luôn biết rằng dù em có đứng ở đâu, ở nhà vẫn có anh đợi.'], sign: 'Sơn' },
      { label: 'EM TRAI', name: 'Luân', title: 'Gửi chị', text: ['Chị ơi, em lớn lên nhìn chị gánh dần phần việc của mẹ, rồi gánh thêm phần của hiệp hội. Em biết không dễ, và em phục chị.', 'Chúc chị 20/10 vui, khỏe, và bớt lo một chút. Có việc gì chị cứ gọi em, em và Bảo Anh luôn ở đây.'], sign: 'Em trai của chị' },
      { label: 'CÁC CON', name: 'Tùng & Bách', title: 'Gửi mẹ', text: ['Mẹ ơi, Tùng và Bách biết mẹ bận lắm, nhưng mẹ chưa bao giờ quên ngày nào chúng con thi, ngày nào chúng con cần mẹ. Chúng con tự hào về mẹ – cả ở công ty và ở nhà.', 'Chúc mẹ 20/10 thật vui. Chúng con hứa sẽ ngoan hơn, tự giác hơn để mẹ đỡ phải lo. Chúng con yêu mẹ!'], sign: 'Tùng và Bách' }
    ],
    candle: 'Em đã dành rất nhiều sự chăm chút cho công ty, cho hiệp hội, cho gia đình. Với ngọn nến nhỏ này, anh và cả nhà muốn gửi một điều ước dành cho chính em.',
    card: { text: 'Cảm ơn em vì đã là trái tim của nhà mình.<br>Chúc em luôn mạnh khỏe, bình an và nhiều niềm vui.', sign: 'SƠN · LUÂN · TÙNG · BÁCH<br>GIA ĐÌNH DẠ LAN · 20/10/2026' },
    closing: 'Anh và những người đàn ông trong nhà hứa sẽ san sẻ nhiều hơn, lắng nghe nhiều hơn, và để em được là chính mình nhiều hơn. Đó là cách chúng tôi muốn trân trọng những điều em đã dành cho gia đình này.',
    closingSignatures: ['Sơn', 'Em Luân', 'Tùng', 'Bách'],
    pronoun: 'em'
  },

  baoanh: {
    key: 'baoanh',
    name: 'Bảo Anh',
    shortName: 'em',
    honorific: 'Gửi mợ, gửi em',
    envelopeHonorific: 'Gửi mợ · em · vợ',
    cardHonorific: 'Gửi mợ · em',
    introScript: 'Người đến sau, mà làm nhà mình đông vui hơn.',
    introLead: 'Hôm nay, Luân cùng anh Sơn, Tùng và Bách xin dành một khoảng lặng để nói lời cảm ơn. Vì sự dịu dàng em mang về nhà này, vì những bữa cơm sum họp có thêm tiếng cười, và vì em đã chọn trở thành một phần của gia đình Dạ Lan.',
    introDetails: ['01 NGƯỜI MỢ DỊU DÀNG', '03 LỜI CHÚC TỪ CẢ NHÀ', '01 TẤM LÒNG TRÂN QUÝ'],
    introNote: 'Mợ ơi, em ơi,<br>có thư cho em…',
    photo: { src: 'assets/photos/bao-anh-va-bach.jpg', alt: 'Mợ Bảo Anh trong tà áo dài vàng, bé Bách ôm mợ', focus: '50% 20%' },
    letter: {
      salutation: 'Gửi em – Bảo Anh, mợ của các cháu và vợ của Luân,',
      body: [
        'Nhân ngày 20/10, những người đàn ông trong nhà – Luân, anh Sơn và hai cháu Tùng, Bách – muốn viết đôi dòng gửi em. Chúng tôi vốn không giỏi nói những lời như thế này, nên xin được nói một lần cho thật.',
        'Về với gia đình này, em về với một nhà có mẹ là Chủ tịch, có chị là Giám đốc, có một công ty mang tên Dạ Lan mà ai cũng bận. Không dễ để hòa vào một nhịp sống như vậy. Nhưng em đã làm điều đó rất nhẹ nhàng: bằng sự dịu dàng, bằng cách để tâm đến từng người, bằng cách khiến Tùng và Bách quý mợ ngay từ những ngày đầu.',
        'Chúng tôi biết ơn em vì những điều rất đời thường: một bữa cơm sum họp có em thì vui hơn, một ngày lễ có em thì đủ hơn, và Luân – người em trai, người cậu của cả nhà – có em, có Bảo Linh và bé Thỏ, thì vững vàng hơn rất nhiều.',
        'Em không cần phải cố gắng để “xứng đáng” với gia đình này. Em đã là gia đình rồi.'
      ],
      wishes: 'Nhân ngày 20/10, cả nhà chúc em luôn mạnh khỏe, bình an và hạnh phúc bên Luân. Mong em luôn giữ được sự dịu dàng ấy, mong những dự định của hai vợ chồng đều thuận lợi, và mong mỗi lần về nhà, em đều thấy mình được yêu thương. Chúc em một ngày thật đẹp, cùng nhiều ngày đẹp như thế.',
      closing: 'Với tất cả sự trân quý,',
      signers: ['Luân – chồng của em', 'Anh Sơn', 'Tùng và Bách']
    },
    milestones: [
      { title: 'Ngày em về với nhà mình', body: 'Có những người bước vào một gia đình và làm cả nhà thấy như em vốn đã ở đó từ lâu. Em là người như vậy. Từ bữa cơm đầu tiên, Tùng và Bách đã quen gọi “mợ Bảo Anh” như một điều rất tự nhiên.', quote: 'Người đến sau, mà như đã ở đây từ lâu.', icon: '✧', book: 'Một ngày,<br>nhà mình đông thêm.', tab: ['Ngày đầu', 'Em về với nhà mình'] },
      { title: 'Những bữa cơm sum họp', body: 'Nhà mình bận – mẹ bận, chị bận, công ty bận. Những bữa cơm đủ mặt vì thế càng quý. Em là người góp phần làm những bữa cơm ấy ấm hơn: thêm một món, thêm một câu chuyện, thêm một tiếng cười.', quote: 'Thêm một người, ấm thêm một bếp.', icon: '☕', book: 'Một bữa cơm,<br>nhiều ấm áp.', tab: ['Sum họp', 'Những bữa cơm đủ mặt'] },
      { title: 'Người mợ của các cháu', body: 'Tùng và Bách quý mợ không phải vì quà, mà vì mợ nhớ từng đứa thích gì, học gì, đang buồn hay đang vui. Với các cháu, mợ là người lớn mà chúng có thể kể chuyện được. Và với Bảo Linh, với bé Thỏ, em là một người mẹ rất dịu dàng.', quote: 'Mợ là người các cháu tìm để kể chuyện.', icon: '❀', book: 'Người mợ<br>các cháu tin.', tab: ['Mợ Bảo Anh', 'Người các cháu tin'] },
      { title: 'Chặng đường phía trước', body: 'Dù phía trước là gì – tổ ấm nhỏ của hai vợ chồng với Bảo Linh và bé Thỏ, những dự định riêng, hay một phần việc ở Dạ Lan – em luôn có cả nhà này phía sau. Mong chặng tiếp theo nhiều niềm vui, và mong em luôn được là chính mình.', quote: 'Phía sau em là cả một gia đình.', icon: '↗', book: 'Phía trước,<br>có cả nhà cùng đi.', tab: ['Phía trước', 'Có cả nhà cùng đi'] }
    ],
    cards: [
      { ico: '🌷', title: 'Sự dịu dàng', small: 'ĐIỀU ĐẦU TIÊN', back: 'Em làm mọi thứ nhẹ nhàng – từ lời nói đến cách để tâm đến người khác. Nhà mình vốn nhiều người mạnh mẽ, nên sự dịu dàng của em rất quý.' },
      { ico: '🧸', title: 'Nhớ từng đứa cháu', small: 'NGƯỜI MỢ', back: 'Em nhớ Tùng thích ăn gì, Bách học lớp nào, đứa nào đang mê điều gì. Hai cháu quý mợ là vì thế.' },
      { ico: '🏠', title: 'Hòa vào nhà rất tự nhiên', small: 'NGÀY ĐẦU', back: 'Về một gia đình ai cũng bận, cũng có vị trí ở công ty – không dễ. Em hòa vào tất cả rất khéo, không ai thấy em là “người mới”.' },
      { ico: '🤝', title: 'Điểm tựa của Luân', small: 'VỢ CHỒNG', back: 'Có em, có Bảo Linh và bé Thỏ, Luân vững vàng hơn, chu đáo hơn, và hay cười hơn. Cả nhà nhìn thấy điều đó.' },
      { ico: '🍵', title: 'Thêm một ấm trà', small: 'BUỔI TỐI', back: 'Những buổi tối cả nhà ngồi lại, em thường là người pha thêm ấm trà, kéo mọi người ở lại lâu hơn một chút.' },
      { ico: '🌿', title: 'Lặng lẽ mà có mặt', small: 'LUÔN Ở ĐÓ', back: 'Em không ồn ào, nhưng khi nhà có việc, em luôn có mặt. Đó là điều cả nhà biết ơn mà ít khi nói.' }
    ],
    gratitude: 'Có những người không cần ồn ào,<br>chỉ cần có mặt là nhà đã ấm hơn.',
    voices: [
      { label: 'CHỒNG', name: 'Luân', title: 'Gửi vợ', text: ['Vợ à, cảm ơn em đã chọn anh và chọn cả gia đình này. Anh biết nhà mình không phải lúc nào cũng dễ – ai cũng bận, ai cũng có việc. Nhưng em chưa bao giờ than, và luôn làm cho mọi thứ nhẹ hơn.', 'Chúc em 20/10 thật vui. Có anh ở đây, lúc nào cũng vậy.'], sign: 'Chồng của em' },
      { label: 'ANH RỂ', name: 'Anh Sơn', title: 'Gửi em', text: ['Bảo Anh, từ ngày em về, nhà mình đông vui hơn thật. Anh thấy Luân trưởng thành hơn, Tùng và Bách có thêm một người để quý, nhà có thêm Bảo Linh và bé Thỏ, và những bữa cơm đủ mặt có thêm người để chờ.', 'Chúc em 20/10 vui, khỏe và hạnh phúc. Cảm ơn em đã là một phần của nhà mình.'], sign: 'Anh Sơn' },
      { label: 'CÁC CHÁU', name: 'Tùng & Bách', title: 'Gửi mợ', text: ['Mợ Bảo Anh ơi, Tùng và Bách chúc mợ 20/10 thật vui! Chúng cháu thích nhất là những lúc kể chuyện với mợ, vì mợ luôn nghe và nhớ hết.', 'Mợ nhớ giữ sức khỏe, và cho Bảo Linh với bé Thỏ sang chơi với chúng cháu thật nhiều nhé. Chúng cháu quý mợ lắm!'], sign: 'Tùng và Bách' }
    ],
    candle: 'Em đã dành nhiều sự quan tâm cho Luân, cho Bảo Linh và bé Thỏ, cho các cháu, cho cả nhà. Với ngọn nến nhỏ này, cả nhà muốn gửi một điều ước dành cho chính em.',
    card: { text: 'Cảm ơn em vì đã làm nhà mình ấm hơn.<br>Chúc em luôn mạnh khỏe, bình an và nhiều niềm vui.', sign: 'LUÂN · SƠN · TÙNG · BÁCH<br>GIA ĐÌNH DẠ LAN · 20/10/2026' },
    closing: 'Cả nhà mong sẽ quan tâm đến em nhiều hơn, để em không bao giờ thấy mình là người đến sau. Đó là cách chúng tôi muốn trân trọng những điều em đã mang đến cho gia đình này.',
    closingSignatures: ['Luân', 'Anh Sơn', 'Tùng', 'Bách'],
    pronoun: 'em'
  }
};
const ALIASES = { ba: 'loan', me: 'loan', vo: 'lien', chi: 'lien', mo: 'baoanh', baoanh: 'baoanh', anh: 'baoanh' };

/* ---------- Hoa ---------- */
const FLOWERS = [
  { name: 'Hoa hồng', meaning: 'Yêu thương', color: '#e98fa6', dark: '#b8537d', center: '#9e3f67', phrase: 'luôn được yêu thương như cách mình đã yêu thương mọi người' },
  { name: 'Hướng dương', meaning: 'Nghị lực', color: '#f2cc6c', dark: '#c9a24a', center: '#6b4e24', phrase: 'giữ được nghị lực và sự bền bỉ trong mọi việc mình đang gánh vác' },
  { name: 'Cẩm chướng', meaning: 'Trân trọng', color: '#e8b0da', dark: '#b876ad', center: '#9a5e92', phrase: 'được trân trọng bởi những người xung quanh, ở nhà và ở nơi làm việc' },
  { name: 'Hoa sen', meaning: 'An yên', color: '#f4b8c6', dark: '#d98aa0', center: '#e5c860', phrase: 'có những ngày thật an yên, không vội vàng' },
  { name: 'Cúc trắng', meaning: 'Bình an', color: '#fffdf2', dark: '#e3d6b0', center: '#d9b24c', phrase: 'luôn bình an và mạnh khỏe' },
  { name: 'Hoa lan', meaning: 'Thanh tao', color: '#f3e6f6', dark: '#c8a2d6', center: '#a35d9e', phrase: 'giữ mãi nét thanh tao, dịu dàng rất riêng của mình' }
];
const RIBBONS = { wine: '#8f1d2c', gold: '#c9a24a', sage: '#6d805e', rose: '#d98aa0' };

function flowerShape(i, cx = 100, cy = 82, r = 38) {
  const f = FLOWERS[i]; let s = '';
  const ring = (n, rx, ry, dist, fill, stroke, rot0 = 0, op = 1) => {
    for (let k = 0; k < n; k++) {
      const a = rot0 + k * 360 / n;
      s += `<ellipse cx="${cx}" cy="${(cy - dist).toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${fill}" stroke="${stroke}" stroke-width=".8" opacity="${op}" transform="rotate(${a} ${cx} ${cy})"/>`;
    }
  };
  if (i === 0) { // hồng
    ring(7, r * .42, r * .62, r * .5, f.color, f.dark); ring(6, r * .34, r * .5, r * .3, f.color, f.dark, 30, .95); ring(5, r * .25, r * .36, r * .15, f.dark, f.center, 15, .9);
    s += `<circle cx="${cx}" cy="${cy}" r="${r * .14}" fill="${f.center}"/>`;
  } else if (i === 1) { // hướng dương
    ring(16, r * .18, r * .62, r * .55, f.color, f.dark); ring(16, r * .16, r * .5, r * .45, '#f7d98a', f.dark, 11);
    s += `<circle cx="${cx}" cy="${cy}" r="${r * .4}" fill="${f.center}"/><circle cx="${cx}" cy="${cy}" r="${r * .3}" fill="#8a6a2e" opacity=".6"/>`;
    for (let k = 0; k < 14; k++) { const a = k * 2.4, d = r * .06 * Math.sqrt(k); s += `<circle cx="${(cx + Math.cos(a) * d * 2).toFixed(1)}" cy="${(cy + Math.sin(a) * d * 2).toFixed(1)}" r="${r * .035}" fill="#f2cc6c" opacity=".7"/>`; }
  } else if (i === 2) { // cẩm chướng
    ring(12, r * .3, r * .58, r * .5, f.color, f.dark); ring(10, r * .28, r * .48, r * .35, '#f0c4e4', f.dark, 18); ring(8, r * .22, r * .34, r * .2, f.color, f.dark, 9);
    s += `<circle cx="${cx}" cy="${cy}" r="${r * .1}" fill="${f.center}"/>`;
  } else if (i === 3) { // sen
    ring(8, r * .3, r * .66, r * .5, f.color, f.dark); ring(6, r * .28, r * .52, r * .3, '#f8ccd6', f.dark, 30); ring(5, r * .2, r * .36, r * .15, '#fbe0e6', f.dark, 10);
    s += `<circle cx="${cx}" cy="${cy}" r="${r * .17}" fill="${f.center}"/>`;
    for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; s += `<circle cx="${(cx + Math.cos(a) * r * .1).toFixed(1)}" cy="${(cy + Math.sin(a) * r * .1).toFixed(1)}" r="${r * .03}" fill="#8a6a2e"/>`; }
  } else if (i === 4) { // cúc trắng
    ring(14, r * .17, r * .62, r * .55, f.color, f.dark); ring(12, r * .15, r * .5, r * .42, '#fffef8', f.dark, 13);
    s += `<circle cx="${cx}" cy="${cy}" r="${r * .26}" fill="${f.center}"/><circle cx="${cx - r * .06}" cy="${cy - r * .06}" r="${r * .12}" fill="#f4d47a" opacity=".8"/>`;
  } else { // lan
    ring(5, r * .34, r * .62, r * .48, f.color, f.dark, 36); ring(3, r * .3, r * .5, r * .3, '#fbf4fc', f.dark, 0, .95);
    s += `<ellipse cx="${cx}" cy="${cy + r * .22}" rx="${r * .22}" ry="${r * .3}" fill="${f.dark}" opacity=".85"/><circle cx="${cx}" cy="${cy + r * .05}" r="${r * .1}" fill="${f.center}"/>`;
    for (let k = 0; k < 5; k++) { s += `<circle cx="${(cx - r * .1 + k * r * .05).toFixed(1)}" cy="${(cy + r * .3).toFixed(1)}" r="${r * .02}" fill="#7a3f78"/>`; }
  }
  return `<g>${s}</g>`;
}
function flowerSvg(i, size = 58) { return `<svg viewBox="0 0 200 180" width="${size}" height="${size}" aria-hidden="true">${flowerShape(i, 100, 90, 70)}</svg>`; }

const BOUQUET_POS = [[300, 200, 78], [190, 260, 70], [410, 262, 70], [245, 150, 60], [355, 150, 60], [300, 300, 64], [150, 330, 52], [450, 330, 52]];
function bouquetSvg(indices, ribbon = 'wine', count = indices.length) {
  let stems = '', leaves = '', blooms = '';
  const pos = BOUQUET_POS.slice(0, Math.max(count, 1));
  pos.forEach(([x, y, r], k) => {
    const i = indices[k % indices.length];
    stems += `<path d="M300 560 Q${(x + 300) / 2 - 20} ${y + 150} ${x} ${y}" fill="none" stroke="#6d805e" stroke-width="5" stroke-linecap="round"/>`;
    const lx = x < 300 ? -1 : 1, ly = y + 110;
    leaves += `<path d="M${(x + 300) / 2} ${ly} q${lx * 30} -40 ${lx * 70} -20 q-30 40 -70 20z" fill="#89a07a" opacity=".9"/>`;
    blooms += flowerShape(i, x, y, r);
  });
  const rb = RIBBONS[ribbon] || RIBBONS.wine;
  const bow = `<g transform="translate(300 470)"><path d="M0 0 C-30 -40 -80 -30 -70 0 C-80 30 -30 40 0 0Z" fill="${rb}"/><path d="M0 0 C30 -40 80 -30 70 0 C80 30 30 40 0 0Z" fill="${rb}"/><path d="M-6 6 L-30 90 L-8 70Z M6 6 L36 92 L12 70Z" fill="${rb}" opacity=".9"/><circle r="12" fill="${rb}" stroke="#fff5e9" stroke-width="2"/></g>`;
  const wrap = `<path d="M210 390 L300 600 L390 390 Q300 440 210 390Z" fill="#f3e6d1" stroke="#dcc9ad" stroke-width="2" opacity=".95"/>`;
  return `<svg viewBox="0 0 600 620" xmlns="http://www.w3.org/2000/svg" role="img">${wrap}${stems}${leaves}${blooms}${bow}</svg>`;
}

/* ---------- Trạng thái ---------- */
let current = null, page = 0, chosen = [], ribbon = 'wine', voiceIndex = 0, candleWish = -1, opened = new Set();
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const toast = (m) => { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2600); };
const markGift = (k) => { opened.add(k); $('#gift-progress').textContent = `Đã mở ${Math.min(opened.size, 5)} / 5 món quà`; };

/* ---------- Chọn người nhận ---------- */
function openRecipient(key) {
  current = RECIPIENTS[key]; if (!current) return;
  const r = current;
  $('#welcome').hidden = true; $('#experience').hidden = false; $('#nav').hidden = false;
  $('#bar-name').textContent = r.name.toUpperCase();
  $('#intro-honorific').textContent = r.honorific; $('#recipient-name').textContent = r.name;
  $('#intro-script').textContent = r.introScript; $('#intro-lead').textContent = r.introLead;
  $('#intro-details').innerHTML = r.introDetails.map(d => `<span>${d}</span>`).join('');
  $('#intro-note').innerHTML = `${r.introNote} <span>↙</span>`;
  $('#intro-flower').innerHTML = bouquetSvg([0, 2, 3, 5, 4, 1], 'wine', 6);
  $('#intro-photo').src = r.photo.src; $('#intro-photo').alt = r.photo.alt;
  // Điểm lấy nét riêng từng ảnh để khuôn mặt luôn nằm giữa khung (ảnh dọc rất dài sẽ bị cắt bớt trên/dưới)
  $('#intro-photo').style.setProperty('--focus', r.photo.focus || '50% 50%');
  renderAlbum();
  $('#envelope-honorific').textContent = r.envelopeHonorific; $('#envelope-name').textContent = r.name;
  $('#letter-salutation').textContent = r.letter.salutation;
  $('#letter-body').innerHTML = r.letter.body.map(p => `<p>${p}</p>`).join('');
  $('#letter-wishes').textContent = r.letter.wishes; $('#letter-closing').textContent = r.letter.closing;
  $('#letter-signers').innerHTML = r.letter.signers.join('<br>');
  closeLetter();
  $('#timeline').innerHTML = r.milestones.map((m, i) => `<button role="tab" aria-selected="${i === 0}" data-milestone="${i}"><span>0${i + 1}</span><b>${m.tab[0]}</b><small>${m.tab[1]}</small></button>`).join('');
  $$('[data-milestone]').forEach(b => b.onclick = () => showPage(Number(b.dataset.milestone)));
  showPage(0);
  $('#flip-grid').innerHTML = r.cards.map((c, i) => `<button class="flip-card" aria-pressed="false" data-card="${i}"><span class="flip-inner"><span class="flip-face flip-front"><span class="ico">${c.ico}</span><span><h4>${c.title}</h4><small>${c.small}</small></span></span><span class="flip-face flip-back"><p>${c.back}</p></span></span></button>`).join('');
  $$('.flip-card').forEach(b => b.onclick = () => { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true'); markGift('card'); });
  $('#gratitude-quote').innerHTML = r.gratitude;
  chosen = []; renderFlowers(); renderBouquet();
  $('#voice-tabs').innerHTML = r.voices.map((v, i) => `<button role="tab" aria-selected="${i === 0}" data-voice="${i}"><small>${v.label}</small><strong>${v.name}</strong></button>`).join('');
  $$('[data-voice]').forEach(b => b.onclick = () => { showVoice(Number(b.dataset.voice)); markGift('voice'); });
  showVoice(0);
  $('#candle-message').textContent = r.candle; $('#light-candle').setAttribute('aria-pressed', 'false'); $('#wish-selector').hidden = true; $('#candle-hint').textContent = 'Chạm để thắp một điều ước.';
  $$('[data-candle-wish]').forEach(b => b.setAttribute('aria-pressed', 'false')); candleWish = -1;
  $('#card-honorific').textContent = r.cardHonorific; $('#card-name').textContent = r.name; $('#card-text').innerHTML = r.card.text; $('#card-sign').innerHTML = r.card.sign;
  $('#closing-text').textContent = r.closing;
  $('#closing-signatures').innerHTML = r.closingSignatures.map(s => `<span class="script">${s}</span>`).join('');
  opened = new Set(); $('#gift-progress').textContent = 'Đã mở 0 / 5 món quà';
  history.replaceState(null, '', `?co=${key}`);
  document.title = `Gửi ${r.name} — 20/10`;
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  setTimeout(observeReveal, 50);
}
function backToWelcome() {
  $('#experience').hidden = true; $('#welcome').hidden = false; $('#nav').hidden = true; current = null;
  history.replaceState(null, '', location.pathname); document.title = 'Gửi những người phụ nữ của gia đình — 20/10';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
$$('[data-recipient]').forEach(b => b.onclick = () => openRecipient(b.dataset.recipient));
$('#switch-top').onclick = backToWelcome; $('#change-recipient').onclick = backToWelcome;
$('#home').onclick = (e) => { e.preventDefault(); backToWelcome(); };

/* ---------- Thư ---------- */
function closeLetter() { $('#envelope').setAttribute('aria-expanded', 'false'); $('#letter-content').hidden = true; $('#envelope').hidden = false; stopSpeech(); }
$('#envelope').onclick = () => {
  const env = $('#envelope'); env.setAttribute('aria-expanded', 'true');
  setTimeout(() => { env.hidden = true; $('#letter-content').hidden = false; markGift('letter'); }, reduced ? 0 : 650);
};
$('#close-letter').onclick = closeLetter;
let speaking = false;
function stopSpeech() { if ('speechSynthesis' in window) speechSynthesis.cancel(); speaking = false; $('#speech-status').textContent = ''; $('#read-letter').textContent = 'Nghe bức thư ♬'; }
$('#read-letter').onclick = () => {
  if (!('speechSynthesis' in window)) return toast('Trình duyệt này không hỗ trợ đọc thư.');
  if (speaking) return stopSpeech();
  const r = current.letter; const text = [r.salutation, ...r.body, r.wishes, r.closing, r.signers.join(', ')].join(' ');
  const u = new SpeechSynthesisUtterance(text); u.lang = 'vi-VN'; u.rate = .92;
  const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith('vi')); if (v) u.voice = v;
  u.onend = stopSpeech; u.onerror = stopSpeech;
  if ($('#letter-content').hidden) $('#envelope').click();
  speechSynthesis.cancel(); speechSynthesis.speak(u); speaking = true;
  $('#speech-status').textContent = v ? 'Đang đọc…' : 'Đang đọc (máy chưa có giọng tiếng Việt)…'; $('#read-letter').textContent = 'Dừng đọc ■';
};

/* ---------- Lưu bút ---------- */
function showPage(n) {
  const ms = current.milestones; page = (n + ms.length) % ms.length; const m = ms[page];
  $$('[data-milestone]').forEach(b => b.setAttribute('aria-selected', Number(b.dataset.milestone) === page));
  $('#milestone-panel').innerHTML = `<p class="eyebrow">CHƯƠNG 0${page + 1}</p><h3>${m.title}</h3><p>${m.body}</p><p class="quote">“${m.quote}”</p>`;
  $('#book-caption').innerHTML = m.book; $('#book-icon').textContent = m.icon;
  $('#page-chapter').textContent = `0${page + 1}`; $('#page-number').textContent = `0${page + 1} / 0${ms.length}`;
  if (page > 0) markGift('journey');
}
$('#previous-page').onclick = () => showPage(page - 1); $('#next-page').onclick = () => showPage(page + 1);

/* ---------- Bó hoa ---------- */
function renderFlowers() {
  $('#flower-options').innerHTML = FLOWERS.map((f, i) => `<button class="flower-option" data-flower="${i}" aria-pressed="${chosen.includes(i)}" ${chosen.length >= 3 && !chosen.includes(i) ? 'disabled' : ''}>${flowerSvg(i)}<span><strong>${f.name}</strong><small>${f.meaning}</small></span></button>`).join('');
  $$('[data-flower]').forEach(b => b.onclick = () => {
    const i = Number(b.dataset.flower);
    if (chosen.includes(i)) chosen = chosen.filter(x => x !== i); else if (chosen.length < 3) chosen.push(i);
    renderFlowers(); renderBouquet();
  });
}
function renderBouquet() {
  const n = chosen.length; const r = current || RECIPIENTS.lien;
  $('#flower-count').textContent = `ĐÃ CHỌN ${n} / 3 BÔNG HOA`;
  $('#bouquet-placeholder').hidden = n > 0;
  $('#live-bouquet').innerHTML = n ? bouquetSvg(chosen, ribbon, n === 3 ? 8 : n === 2 ? 5 : 3) : '';
  $('#card-flower').innerHTML = bouquetSvg(n ? chosen : [0, 2, 4], ribbon, n === 3 ? 8 : n ? 5 : 6);
  if (n === 3) {
    const fs = chosen.map(i => FLOWERS[i]);
    $('#bouquet-title').textContent = `Bó hoa ${fs[0].meaning}, ${fs[1].meaning} & ${fs[2].meaning}`;
    $('#bouquet-wish').textContent = `Chúc ${r.pronoun} ${fs[0].phrase}; ${fs[1].phrase}; và ${fs[2].phrase}. Ba bông hoa – ${fs.map(f => f.name.toLowerCase()).join(', ')} – một lời chúc, từ những người đàn ông trong nhà.`;
    markGift('bouquet');
  } else {
    $('#bouquet-title').textContent = n ? `Còn ${3 - n} bông hoa nữa…` : 'Bó hoa đang chờ…';
    $('#bouquet-wish').textContent = n ? fs_hint() : 'Mỗi cách kết hợp là một lời chúc riêng.';
  }
  function fs_hint() { return chosen.map(i => `${FLOWERS[i].name} – ${FLOWERS[i].meaning.toLowerCase()}`).join(' · '); }
}
$$('[data-ribbon]').forEach(b => b.onclick = () => { ribbon = b.dataset.ribbon; $$('[data-ribbon]').forEach(x => x.setAttribute('aria-pressed', x === b)); renderBouquet(); });
$('#reset-flowers').onclick = () => { chosen = []; renderFlowers(); renderBouquet(); };

/* ---------- Lời chúc ---------- */
function showVoice(i) {
  voiceIndex = i; const v = current.voices[i];
  $$('[data-voice]').forEach(b => b.setAttribute('aria-selected', Number(b.dataset.voice) === i));
  $('#voice-paper').innerHTML = `<p class="eyebrow">${v.label}</p><h3>${v.title}</h3>${v.text.map(t => `<p>${t}</p>`).join('')}<span class="script">— ${v.sign}</span>`;
}

/* ---------- Nến ---------- */
$('#light-candle').onclick = () => {
  const lit = $('#light-candle').getAttribute('aria-pressed') === 'true';
  $('#light-candle').setAttribute('aria-pressed', !lit);
  $('#wish-selector').hidden = lit;
  $('#candle-hint').textContent = lit ? 'Chạm để thắp một điều ước.' : 'Chọn một điều ước bên cạnh nhé.';
  if (!lit) markGift('candle');
};
const CANDLE_TEXT = ['Mong {p} luôn bình an, trong lòng nhẹ nhõm, dù ngoài kia có bao nhiêu việc đang chờ.', 'Mong mỗi ngày của {p} đều có ít nhất một niềm vui nho nhỏ – một bữa cơm ngon, một tin tốt, một tiếng cười.', 'Mong {p} luôn khỏe. Khỏe để làm điều mình muốn, và khỏe để còn đi chơi với cả nhà thật nhiều.', 'Mong {p} hạnh phúc – không phải hạnh phúc của người khác nhìn vào, mà là thứ hạnh phúc {p} thật sự cảm thấy.', 'Mong công việc của {p} thuận lợi, những quyết định khó đều được đáp lại bằng kết quả tốt.', 'Mong gia đình mình luôn ấm – và {p} luôn là người được ôm, không chỉ là người ôm người khác.', 'Mong {p} có thời gian cho chính mình: một buổi sáng không vội, một cuốn sách, một chuyến đi.', 'Mong những dự định của {p} – lớn hay nhỏ – đều thành như ý.'];
$$('[data-candle-wish]').forEach(b => b.onclick = () => {
  candleWish = Number(b.dataset.candleWish);
  $$('[data-candle-wish]').forEach(x => x.setAttribute('aria-pressed', x === b));
  const p = current.pronoun; $('#candle-message').textContent = CANDLE_TEXT[candleWish].replaceAll('{p}', p);
  $('#candle-hint').textContent = 'Điều ước đã được gửi đi.'; burstPetals(18);
});

/* ---------- Thiệp ---------- */
$$('[data-paper]').forEach(b => b.onclick = () => { $$('[data-paper]').forEach(x => x.setAttribute('aria-pressed', x === b)); $('#card-preview').dataset.paper = b.dataset.paper; });
const PAPER = { cream: ['#fffaf0', '#f4e8d2'], blush: ['#fff3f3', '#f6d9db'], sage: ['#f6faf1', '#dfe9d4'] };
async function downloadCard() {
  const st = $('#download-status'); st.textContent = 'Đang vẽ thiệp…';
  try {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    const W = 1080, H = 1350, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
    const [c1, c2] = PAPER[$('#card-preview').dataset.paper] || PAPER.cream;
    const g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, c1); g.addColorStop(1, c2); x.fillStyle = g; x.fillRect(0, 0, W, H);
    x.strokeStyle = '#e2d8c6'; x.lineWidth = 3; x.strokeRect(36, 36, W - 72, H - 72);
    // bó hoa (SVG -> image)
    const svg = $('#card-flower svg').outerHTML.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    const img = new Image(); img.decoding = 'async';
    await new Promise((ok, err) => { img.onload = ok; img.onerror = err; img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); });
    x.drawImage(img, (W - 520) / 2, 110, 520, 537);
    x.textAlign = 'center'; x.fillStyle = '#6f7068'; x.font = '500 22px "Be Vietnam Pro", Arial, sans-serif';
    x.fillText('2 0  /  1 0  /  2 0 2 6', W / 2, 90);
    x.fillStyle = '#c0616b'; x.font = '52px "Dancing Script", cursive'; x.fillText(current.cardHonorific, W / 2, 720);
    x.fillStyle = '#8f1d2c'; x.font = '500 74px "Cormorant Garamond", Georgia, serif'; wrap(x, current.name, W / 2, 810, 900, 80);
    x.fillStyle = '#4c5048'; x.font = '36px "Cormorant Garamond", Georgia, serif';
    const lines = current.card.text.split('<br>'); let y = 930; lines.forEach(l => { y = wrap(x, l, W / 2, y, 880, 48); });
    x.fillStyle = '#6f7068'; x.font = '500 20px "Be Vietnam Pro", Arial, sans-serif';
    current.card.sign.split('<br>').forEach((l, i) => x.fillText(l.split('').join(String.fromCharCode(8202)), W / 2, 1200 + i * 36));
    if (chosen.length === 3) { x.fillStyle = '#8f1d2c'; x.font = 'italic 28px "Cormorant Garamond", Georgia, serif'; x.fillText($('#bouquet-title').textContent, W / 2, 1120); }
    const blob = await new Promise(ok => c.toBlob(ok, 'image/png'));
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `thiep-20-10-${current.key}.png`; document.body.appendChild(a); a.click(); a.remove();
    st.textContent = 'Đã lưu tấm thiệp. Mở trong thư viện ảnh/thư mục tải về nhé.'; toast('Đã lưu thiệp ✓');
  } catch (e) { console.error(e); st.textContent = 'Không lưu được thiệp trên trình duyệt này. Hãy chụp màn hình tấm thiệp nhé.'; }
  function wrap(ctx, text, cx, y, maxW, lh) {
    const words = text.split(' '); let line = '';
    for (const w of words) { const t = line ? line + ' ' + w : w; if (ctx.measureText(t).width > maxW && line) { ctx.fillText(line, cx, y); y += lh; line = w; } else line = t; }
    if (line) { ctx.fillText(line, cx, y); y += lh; } return y;
  }
}
$('#download-card').onclick = downloadCard;

/* ---------- Chia sẻ ---------- */
$('#share-gift').onclick = async () => {
  const url = `${location.origin}${location.pathname}?co=${current.key}`;
  const data = { title: `Gửi ${current.name} — 20/10`, text: 'Một món quà nhỏ nhân ngày Phụ nữ Việt Nam, từ những người đàn ông trong gia đình.', url };
  try { if (navigator.share) { await navigator.share(data); return; } } catch (e) { if (e.name === 'AbortError') return; }
  try { await navigator.clipboard.writeText(url); toast('Đã sao chép đường link ✓'); } catch { toast(url); }
};

/* ---------- Album gia đình ---------- */
const PHOTOS = [
  { src: 'assets/photos/ca-nha-ao-dai.jpg', tag: 'CẢ NHÀ', cap: 'Cả nhà trong tà áo dài – bà Loan ở giữa, xung quanh là con cháu đủ mặt.' },
  { src: 'assets/photos/nha-son-lien.jpg', tag: 'NHÀ MÌNH', cap: 'Nhà Sơn – Liên chụp vội trước cổng: con ôm chặt giữa bố và mẹ, nụ cười nào cũng rạng rỡ.' },
  { src: 'assets/photos/lien-va-me.jpg', tag: 'HAI MẸ CON', cap: 'Liên và mẹ Loan – hai mẹ con, một nụ cười giống nhau.' },
  { src: 'assets/photos/san-khau-ba-lien-son.jpg', tag: 'TRÊN SÂN KHẤU', cap: 'Bà Loan trong tà áo dài nhung đỏ thêu sen, hai bên là con gái Liên và con rể Sơn.' },
  { src: 'assets/photos/ba-the-he.jpg', tag: 'BA THẾ HỆ', cap: 'Bà Loan, mợ Bảo Anh và Bách – ba thế hệ trong một khung hình.' },
  { src: 'assets/photos/tet-sum-hop.jpg', tag: 'TẾT SUM HỌP', cap: 'Ngày đầu năm, cả nhà quây quần: bé Thỏ ngồi gọn trong lòng Liên, Bách và Tùng áo dài vàng bên cạnh.' },
  { src: 'assets/photos/lien-va-tho.jpg', tag: 'TẾT', cap: 'Liên bế cháu Thỏ ngày Tết, Bách ngồi sát bên, bà ngoại cười phía sau.' },
  { src: 'assets/photos/tho-tren-xe.jpg', tag: 'BÉ THỎ', cap: 'Bé Thỏ buộc tóc hai bên, giơ ngón tay cái trên xe – nhỏ xíu mà đã biết “ok” rồi.' },
  { src: 'assets/photos/sinh-nhat-ba-va-cac-chau.jpg', tag: 'BÊN BÁNH KEM', cap: 'Bà ngoại ôm bé Thỏ bên chiếc bánh kem, Tùng, Bách và Bảo Linh vây quanh – một tối rất đông, rất vui.' },
  { src: 'assets/photos/ba-tung-bach.jpg', tag: 'BÀ NGOẠI', cap: 'Bà Loan cùng Tùng và Bách – áo dài đỏ, nụ cười cũng đỏ như Tết.' },
  { src: 'assets/photos/ba-va-cac-chau.jpg', tag: 'NGÀY XƯA', cap: 'Bà ngoại và các cháu ngày còn bé xíu – ảnh càng cũ càng quý.' },
  { src: 'assets/photos/ba-va-hai-chau-san-bay.jpg', tag: 'ĐI CHƠI', cap: 'Bà ngoại đội nón lá dẫn Tùng và Bách đi chơi – hai cháu ngồi trên vali, bà đứng sau cười.' },
  { src: 'assets/photos/ba-di-choi.jpg', tag: 'BÀ ĐI CHƠI', cap: 'Bà Loan đi chơi xa – kính râm, khăn buộc tóc và chiếc nón cói vẽ hoa, trẻ trung như thuở nào.' },
  { src: 'assets/photos/hoi-an.jpg', tag: 'HỘI AN', cap: 'Chuyến đi Hội An của cả nhà, dưới giàn hoa giấy hồng.' },
  { src: 'assets/photos/hai-bo-con.jpg', tag: 'HAI BỐ CON', cap: 'Hai bố con, một bữa tối – những khoảnh khắc nhỏ làm nên gia đình.' },
  { src: 'assets/photos/bua-lau.jpg', tag: 'BỮA CƠM NHÀ', cap: 'Một bữa lẩu của cả nhà – mẹ pha nước chấm, con ngồi chờ.' }
];
let lbIndex = 0;
function renderAlbum() {
  const g = $('#photo-grid'); if (g.dataset.ready) return; g.dataset.ready = '1';
  g.innerHTML = PHOTOS.map((p, i) => `<figure data-photo="${i}"><img src="${p.src}" alt="${p.cap}" loading="lazy"><figcaption><small>${p.tag}</small>${p.cap}</figcaption></figure>`).join('');
  $$('[data-photo]').forEach(f => f.onclick = () => openLightbox(Number(f.dataset.photo)));
}
function openLightbox(i) {
  lbIndex = (i + PHOTOS.length) % PHOTOS.length; const p = PHOTOS[lbIndex];
  $('#lightbox-img').src = p.src; $('#lightbox-img').alt = p.cap; $('#lightbox-cap').textContent = p.cap;
  $('#lightbox').hidden = false; document.body.style.overflow = 'hidden'; markGift('album');
}
function closeLightbox() { $('#lightbox').hidden = true; document.body.style.overflow = ''; }
$('#lightbox-close').onclick = closeLightbox;
$('#lightbox-prev').onclick = (e) => { e.stopPropagation(); openLightbox(lbIndex - 1); };
$('#lightbox-next').onclick = (e) => { e.stopPropagation(); openLightbox(lbIndex + 1); };
$('#lightbox').onclick = (e) => { if (e.target === e.currentTarget) closeLightbox(); };
addEventListener('keydown', e => { if ($('#lightbox').hidden) return; if (e.key === 'Escape') closeLightbox(); if (e.key === 'ArrowLeft') openLightbox(lbIndex - 1); if (e.key === 'ArrowRight') openLightbox(lbIndex + 1); });

/* ---------- Nhạc nền: bolero trữ tình (hướng nhạc Lệ Quyên) – Web Audio, không cần file ----------
   Giai điệu tự soạn, giọng La thứ, nhịp 4/4 chậm ~60 BPM: guitar rải điệu bolero, lớp dây nền êm,
   tiếng dẫn vào mềm, ngân dài, rung và luyến như cách hát bolero, vang phòng và tiếng vọng nhẹ. */
let audio = null;
function makeMusic() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const master = ctx.createGain(); master.gain.value = .0001; master.connect(ctx.destination);
  // Vang phòng tổng hợp (nhiễu trắng tắt dần) để tiếng ấm và sâu hơn
  const verb = ctx.createConvolver();
  { const len = Math.floor(ctx.sampleRate * 3.2), buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.6); }
    verb.buffer = buf; }
  const verbGain = ctx.createGain(); verbGain.gain.value = .4; verb.connect(verbGain); verbGain.connect(master);
  const dry = ctx.createGain(); dry.connect(master); dry.connect(verb);
  const noise = (() => { const b = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return b; })();

  const BPM = 60, BEAT = 60 / BPM, BAR = BEAT * 4;
  // Tiếng vọng nhẹ dành riêng cho tiếng dẫn (3/4 phách) cho giai điệu bay hơn
  const echo = ctx.createDelay(2); echo.delayTime.value = BEAT * .75;
  const echoFb = ctx.createGain(); echoFb.gain.value = .22; const echoWet = ctx.createGain(); echoWet.gain.value = .2;
  echo.connect(echoFb); echoFb.connect(echo); echo.connect(echoWet); echoWet.connect(dry);
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  // Hợp âm (số MIDI): bass chính, bass phụ (bậc 5) và ba nốt rải
  const CHORDS = {
    Am: { bass: 45, alt: 52, tones: [57, 60, 64] }, Dm: { bass: 50, alt: 45, tones: [57, 62, 65] },
    E7: { bass: 40, alt: 47, tones: [56, 59, 62] }, G: { bass: 43, alt: 50, tones: [59, 62, 67] },
    C: { bass: 48, alt: 43, tones: [55, 60, 64] }, F: { bass: 41, alt: 48, tones: [57, 60, 65] }
  };
  // Vòng hoà âm bolero quen thuộc, 16 ô nhịp
  const PROG = ['Am', 'Dm', 'E7', 'Am', 'Am', 'Dm', 'G', 'C', 'F', 'Dm', 'E7', 'Am', 'Dm', 'Am', 'E7', 'Am'];
  // Giai điệu: mỗi ô nhịp là danh sách [phách bắt đầu, độ dài (phách), nốt MIDI, luyến từ dưới lên (nửa cung)]
  const MELODY = [
    [[0, 1.5, 69, 2], [1.5, .5, 71], [2, 2, 72, 1]],
    [[0, 1, 74, 1], [1, 1, 72], [2, 2, 69, 2]],
    [[0, 1.5, 68, 1], [1.5, .5, 71], [2, 1, 69, 1], [3, 1, 68]],
    [[0, 3.5, 64, 2]],
    [[0, 1, 64], [1, 1, 69, 2], [2, 1, 71], [3, 1, 72, 1]],
    [[0, 2, 74, 2], [2, 1, 77, 1], [3, 1, 76]],
    [[0, 1.5, 74, 1], [1.5, .5, 72], [2, 2, 71, 1]],
    [[0, 3.5, 72, 2]],
    [[0, 1, 72], [1, 1, 74, 1], [2, 2, 76, 2]],
    [[0, 1.5, 77, 1], [1.5, .5, 76], [2, 2, 74, 2]],
    [[0, 1, 72, 1], [1, 1, 71], [2, 1, 68, 1], [3, 1, 71]],
    [[0, 3.5, 69, 2]],
    [[0, 1, 74, 1], [1, 1, 72], [2, 1, 71], [3, 1, 69, 1]],
    [[0, 2, 72, 1], [2, 1, 71], [3, 1, 69, 1]],
    [[0, 1.5, 68, 1], [1.5, .5, 71], [2, 2, 64, 2]],
    [[0, 4, 69, 2]]
  ];

  // Guitar nylon: triangle + sine quãng tám, lọc thông thấp hạ dần như dây đàn tắt
  const pluck = (m, t, vol = .18, dur = 1.8) => {
    const f = hz(m), o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), g2 = ctx.createGain(), fl = ctx.createBiquadFilter();
    o.type = 'triangle'; o2.type = 'sine'; o.frequency.value = f; o2.frequency.value = f * 2; o2.detune.value = 3; g2.gain.value = .15;
    fl.type = 'lowpass'; fl.frequency.setValueAtTime(Math.min(3600, f * 5), t); fl.frequency.exponentialRampToValueAtTime(Math.max(260, f * 1.4), t + dur);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(fl); o2.connect(g2); g2.connect(fl); fl.connect(g); g.connect(dry);
    o.start(t); o2.start(t); o.stop(t + dur + .05); o2.stop(t + dur + .05);
  };
  // Lớp dây nền: ba nốt hợp âm ngân suốt ô nhịp, vào ra rất chậm
  const pad = (tones, t) => tones.forEach((m, i) => {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), fl = ctx.createBiquadFilter();
    o.type = 'sine'; o2.type = 'triangle'; o.frequency.value = hz(m - 12); o2.frequency.value = hz(m - 12); o2.detune.value = i % 2 ? 6 : -6;
    fl.type = 'lowpass'; fl.frequency.value = 900;
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.028, t + 1.2); g.gain.setValueAtTime(.028, t + BAR - .6); g.gain.exponentialRampToValueAtTime(.0001, t + BAR + .9);
    o.connect(fl); o2.connect(fl); fl.connect(g); g.connect(dry); o.start(t); o2.start(t); o.stop(t + BAR + 1); o2.stop(t + BAR + 1);
  });
  // Tiếng dẫn giai điệu: vào mềm, ngân dài, rung sau nửa giây, luyến từ nốt dưới lên như cách hát bolero
  const lead = (m, t, beats, slide = 0, vol = .16) => {
    const f = hz(m), f0 = slide ? f * Math.pow(2, -slide / 12) : f;
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), g2 = ctx.createGain(), fl = ctx.createBiquadFilter(), lfo = ctx.createOscillator(), lg = ctx.createGain();
    o.type = 'triangle'; o2.type = 'sine'; o2.detune.value = 4; g2.gain.value = 1.1;
    [o, o2].forEach(x => { x.frequency.setValueAtTime(f0, t); x.frequency.exponentialRampToValueAtTime(f, t + .16); });
    lfo.type = 'sine'; lfo.frequency.value = 5; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(8, t + .55);
    lfo.connect(lg); lg.connect(o.detune); lg.connect(o2.detune);
    fl.type = 'lowpass'; fl.frequency.value = 1500; fl.Q.value = .5;
    const end = t + beats * BEAT + .05, hold = Math.max(t + .2, end - .35);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .18); g.gain.setValueAtTime(vol, hold); g.gain.exponentialRampToValueAtTime(.0001, end + .45);
    o.connect(fl); o2.connect(g2); g2.connect(fl); fl.connect(g); g.connect(dry); g.connect(echo);
    [o, o2, lfo].forEach(x => { x.start(t); x.stop(end + .5); });
  };
  // Gõ rất nhẹ: lúc lắc (maracas) và bongo
  const shaker = (t, vol = .014) => { const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = noise; f.type = 'bandpass'; f.frequency.value = 6000; f.Q.value = 1.2; g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + .1); s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t + .13); };
  const bongo = (t, hi = false, vol = .07) => { const o = ctx.createOscillator(), g = ctx.createGain(), f = hi ? 220 : 145; o.type = 'sine'; o.frequency.setValueAtTime(f * 1.5, t); o.frequency.exponentialRampToValueAtTime(f, t + .05); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .008); g.gain.exponentialRampToValueAtTime(.0001, t + .25); o.connect(g); g.connect(dry); o.start(t); o.stop(t + .3); };

  let bar = 0, next = 0, timer = null;
  const scheduleBar = () => {
    while (next < ctx.currentTime + .5) {
      const t = next, idx = bar < 2 ? 0 : (bar - 2) % 16, ch = CHORDS[PROG[idx]];
      pad(ch.tones, t);
      // Đệm điệu bolero: bass – rải ba nốt (chùm ba) – bass phụ – hai nốt rải
      pluck(ch.bass, t, .22, 2.4);
      ch.tones.forEach((n, i) => pluck(n, t + BEAT * (1 + i / 3), .1, 1.5));
      pluck(ch.alt, t + BEAT * 2, .18, 2.2);
      pluck(ch.tones[1], t + BEAT * 3, .1, 1.4); pluck(ch.tones[2], t + BEAT * 3.5, .09, 1.4);
      for (let i = 0; i < 8; i++) shaker(t + BEAT * i / 2, i % 2 ? .009 : .014);
      bongo(t); bongo(t + BEAT * 2, true);
      if (bar >= 2) MELODY[idx].forEach(([b, d, m, s]) => lead(m, t + BEAT * b, d, s));
      bar++; next += BAR;
    }
    timer = setTimeout(scheduleBar, 150);
  };
  return {
    start() {
      ctx.resume().catch(() => {});
      bar = 0; next = ctx.currentTime + .1; clearTimeout(timer);
      master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setValueAtTime(.0001, ctx.currentTime); master.gain.exponentialRampToValueAtTime(.9, ctx.currentTime + 2.5);
      scheduleBar();
    },
    stop() { clearTimeout(timer); master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setValueAtTime(master.gain.value, ctx.currentTime); master.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + 1.5); }
  };
}
$('#sound').onclick = () => {
  const b = $('#sound'); const on = b.getAttribute('aria-pressed') === 'true';
  if (!audio) { try { audio = makeMusic(); } catch { return toast('Trình duyệt không hỗ trợ nhạc nền.'); } }
  if (on) { audio.stop(); b.setAttribute('aria-pressed', 'false'); b.querySelector('span').textContent = 'Nhạc: tắt'; }
  else { audio.start(); b.setAttribute('aria-pressed', 'true'); b.querySelector('span').textContent = 'Nhạc: bật'; }
};
$('#read-size').onclick = () => { const on = document.body.classList.toggle('big'); $('#read-size').setAttribute('aria-pressed', on); };

/* ---------- Cánh hoa rơi ---------- */
const PETAL_COLORS = ['#f4b8c6', '#e98fa6', '#f2cc6c', '#e8b0da', '#fffdf2', '#f3e6f6'];
function spawnPetal() {
  if (reduced || document.hidden) return;
  const p = document.createElement('span'); p.className = 'petal';
  p.style.left = Math.random() * 100 + 'vw'; p.style.background = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
  p.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px'); p.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
  p.style.animationDuration = (9 + Math.random() * 7) + 's'; p.style.width = 10 + Math.random() * 8 + 'px'; p.style.height = 14 + Math.random() * 8 + 'px';
  $('#petals').appendChild(p); setTimeout(() => p.remove(), 17000);
}
function burstPetals(n) { for (let i = 0; i < n; i++) setTimeout(spawnPetal, i * 60); }
setInterval(spawnPetal, 1800); burstPetals(10);

/* ---------- Tiến trình & hiện dần ---------- */
addEventListener('scroll', () => { const h = document.documentElement; $('#progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%'; }, { passive: true });
let io;
function observeReveal() {
  if (!('IntersectionObserver' in window)) return;
  io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.section-pad').forEach(s => { s.classList.add('reveal'); io.observe(s); });
}
observeReveal();

/* ---------- Khởi động ---------- */
$('#main-bouquet').innerHTML = bouquetSvg([0, 3, 2, 5, 4], 'wine', 5);
(function init() {
  const q = new URLSearchParams(location.search).get('co'); if (!q) return;
  const k = (q || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const key = RECIPIENTS[k] ? k : ALIASES[k]; if (key) openRecipient(key);
})();
